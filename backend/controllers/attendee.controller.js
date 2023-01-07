const db = require("../models");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

// Importing the Attendee schema model
const Attendee = db.attendees;

// function to register a new Attendee
exports.create = async (req, res) => {
  // Validation Result using express Validator
  const error = validationResult(req);

  // Checking Error are empty or not If Empty then Show error otherwise save data todatabase
  if (!error.isEmpty()) {
    return res.status(403).send(error);
  } else {
    // Check if the attendee already exists
    let user = await Attendee.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "An attendee with this email already exists" });
    }

    // Create a Attendee from request body.
    const attendee = new Attendee(req.body);

    // Save Attendee details in the database
    // And send email with QR code
    attendee
      .save(attendee)
      .then(async (data) => {
        // data for qr code
        let QRdata = {
          name: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
        };

        let stringdata = JSON.stringify(QRdata);

        QRCode.toFile("QRcode.png", stringdata, (err, code) => {
          if (err) console.log(err);
        });

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

        // data to send in email
        const mailData = {
          from: process.env.USER_ID,
          to: req.body.email,
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

        // sending the email
        transporter.sendMail(mailData, (error, info) => {
          if (error) console.log(error);
          console.log("Email Sent Successfully");
        });

        res.status(200).send({ message: "Attendee registered successfully!" });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while registering the Attendee.",
        });
      });
  }
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

  Attendee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
        message: "Error updating Attendee with id=" + id,
      });
    });
};

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

// Create more controller functions here...
