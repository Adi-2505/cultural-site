const db = require("../models");

// Importing the Attendee schema model
const Attendee = db.attendees;

// function to register a new Attendee
exports.create = (req, res) => {
  // Create a Attendee from request body.
  const attendee = new Attendee(req.body);

  // Save Attendee details in the database
  attendee
    .save(attendee)
    .then((data) => {
      res.status(200).send({ message: "Attendee registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while registering the Attendee.",
      });
    });
};

// Create more controller functions here...
