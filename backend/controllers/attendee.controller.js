const db = require("../models");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs")

// Importing the Attendee schema model
const Attendee = db.attendees;

// Importing the Attendee verification schema model
const Verification = db.verification;

const transporter = nodemailer.createTransport({
  service: "gmail",
  // authentication info.
  auth: {
    // sender email id
    user: process.env.USER_ID,

    // sender app password // NOTE: different from regular password
    pass: process.env.APP_PASS,

  },
});

// function to send verification email to the attendee
const sendVerificationEmail = ({ _id, email }, res) => {
  const currentUrl = `http://localhost:${process.env.PORT}/`

  const uniqueString = uuidv4() + _id

  const mailData = {
    from: process.env.USER_ID,
    to: email,
    subject: "Verify your email",
    text: `This is your verification link`,
    html: `<a href = ${currentUrl + "api/attendees/verify/" + _id + "/" + uniqueString}>Click on this link</a>`
  };

  const saltRounds = 10;
  bcrypt
    .hash(uniqueString, saltRounds)
    .then((result) => {

      const newVerification = new Verification({
        id: _id,
        uniqueString: result,
        createdAt: Date.now(),
        expiresAt: Date.now() + 21600000,
      })

      newVerification
        .save()
        .then(() => {

          transporter
            .sendMail(mailData)
            .then(() => {
              // verification email sent and verification record has been saved  
              res.json({
                verificationStatus: "Pending",
                message: "verification email has been sent"
              })
            })
            .catch((error) => {
              console.log(error)
              res.json({ message: "error occured while sending verification email" })
            })
        })
        .catch((error) => {
          console.log(error)
          res.json({ message: "error occured while saving verification record" })
        })

    })
    .catch(() => {
      res.json({ message: "Error occured while " })
    })
};




// function to register a new Attendee
exports.create = (req, res) => {

  Attendee
    .findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        return res.status(400).json({ message: "An attendee with this email already exists" });
      } else {

        // Create a Attendee from request body.
        bcrypt
          .genSalt(10)
          .then((salt) => {
            bcrypt
              .hash(req.body.password, salt)
              .then((secPass) => {

                const attendee = new Attendee({
                  name: req.body.name,
                  email: req.body.email,
                  gender: req.body.gender,
                  college: req.body.college,
                  contact: req.body.contact,
                  password: secPass,
                  verified: false
                });

                attendee
                  .save(attendee)
                  .then((result) => {
                    // sending the verification email with verification link
                    sendVerificationEmail(result, res);

                  }).catch((error) => {
                    console.log(error)
                    res.status(400).json({ message: "error ocurred while saving the attendee" })
                  })
              })
              .catch((error) => {
                console.log(error)
                res.json({ message: "error occured while hashing password" })
              })
          })
          .catch((error) => {
            console.log(error)
            res.json({ message: "error occured while generating salt" })
          })

      }
    })
    .catch((error) => {
      console.log(error)
      res.json({ message: "error occured while finding attendee with email" })
    })

};

// Retrieve all attendees or specific attendee by name from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Attendee.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving attendees.",
      });
    });
};

// Find a single Attendee with an id
exports.findOne = (req, res) => {


  const id = req.params.id;

  Attendee.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found attendee with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving attendee with id=" + id });
    });
};

// Update a attendee by the id in the request
exports.update = (req, res) => {

  const id = req.params.id;

  Attendee.findByIdAndUpdate(id, req.body, { useFindAndModify: false, runValidators: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Attendee with id=${id}. Or Attendee was not found!`,
        });
      } else
        res
          .status(200)
          .send({ message: "Attendee's details were updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + " -: Error updating Attendee with id=" + id,
      });
    });
}


// Delete a Attendee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Attendee.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Attendee with id=${id}. Or Attendee was not found!`,
        });
      } else {
        res.send({
          message: "Attendee was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Attendee with id=" + id,
      });
    });
};

// function to verify the attendee email and send qr code after email has been verified
exports.verify = (req, res) => {
  const { id, uniqueString } = req.params;


  Verification
    .find({ id: id })
    .then((result) => {
      if (result.length > 0) {
        const { expiresAt } = result[0]
        const hashedUniqueString = result[0].uniqueString
        if (expiresAt < Date.now()) {
          Verification
            .deleteOne({ id: id })
            .then(() => {
              Attendee
                .deleteOne({ _id: id })
                .then(() => {
                  const message = "Link has been expired, please register again"
                  return res.redirect(`/api/attendees/verified/error=true&message=${message}`)
                })
                .catch((error) => {
                  console.log(error)
                  const message = "error while deleting the expired attendee record"
                  return res.redirect(`/api/attendees/verified/error=true&message=${message}`)
                })
            })
            .catch((error) => {
              console.log(error)
              const message = "error while deleting the expired attendee verification record"
              return res.redirect(`/api/attendees/verified/error=true&message=${message}`)
            })
        } else {
          bcrypt
            .compare(uniqueString, hashedUniqueString)
            .then((result) => {
              if (result) {
                // strings matched
                // Update the verified field in the attendee record
                Attendee
                  .findOneAndUpdate({ _id: id }, { verified: true }, { new: true })
                  .then((result) => {
                    Verification
                      .deleteOne({ id: id })
                      .then(() => {
                        // here
                        // data for qr code. only ID
                        const QRdata = {
                          id: id
                        };

                        const stringdata = JSON.stringify(QRdata);

                        // Creating the qr code file
                        QRCode
                          .toFile("QRcode.png", stringdata)
                          .then(() => {
                            const mailData = {
                              from: process.env.USER_ID,
                              to: result.email,
                              subject: "Your Entry Pass",
                              text: `This is your QR code`,
                              // QR code attachments
                              attachments: [
                                {
                                  filename: "QRcode.png",
                                  path: "./QRcode.png",
                                },
                              ],
                            };

                            // sending the email with qr code
                            transporter.sendMail(mailData)
                              .then(() => {
                                const message = "Your email has been verified. QR code has been sent to your email"
                                return res.redirect(`/api/attendees/verified/${message}`)
                              })
                              .catch((error) => {
                                console.log(error)
                                res.status(500).json({ message: "error occured while sending the email with qr code" })
                              })
                          })
                          .catch((error) => {
                            console.log(error)
                            res.status().json({ message: "error occured while generating the qr code file" })
                          })

                      })
                      .catch((error) => {
                        console.log(error)
                        const message = "error while finalizing and deleting attendee verification record"
                        return res.redirect(`/api/attendees/verified/${message}`)
                      })
                  })
                  .catch((error) => {
                    console.log(error)
                    const message = "error while updating attendee verification record"
                    return res.redirect(`/api/attendees/verified/${message}`)
                  })
              } else {
                // Existing record but invalid verification details passed
                const message = "Invalid verification details passed. Check your inbox or spam folder"
                return res.redirect(`/api/attendees/verified/${message}`)
              }
            })
            .catch((error) => {
              console.log(error)
              const message = "error occured while comparing unique string"
              return res.redirect(`/api/attendees/verified/${message}`)
            })
        }
      } else {
        const message = "Account record does not exist or has been verified already. Please login"
        return res.redirect(`/api/attendees/verified/${message}`)
      }
    })
    .catch((error) => {
      console.log(error)
      const message = "Error occured while checking for existing user verification record"
      return res.redirect(`/api/attendees/verified/${message}`)
    })
}


exports.verified = (req, res) => {
  const { message } = req.params;
  res.json({ message })
}

// Create more controller functions here...
