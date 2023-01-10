const db = require("../models");

// Importing the Sponsor schema model
const Attendee = db.attendees;

// function to register a new Sponsor
exports.create = async (req, res) => {
  // Create a Sponsor from request body.
  const sponsor = new Sponsor(req.body);

  // Save Sponsor details in the database
  attendee
    .save(attendee)
    .then((data) => {
      res.status(200).send({ message: "Sponsor registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while registering the Sponsor.",
      });
    });
};

// Retrieve all sponsors or specific sponsor by name from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Sponsor.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sponsors.",
      });
    });
};

// Find a single Sponsor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sponsor.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found sponsor with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving sponsor with id=" + id });
    });
};

// Update a sponsor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Sponsor.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    runValidators: true,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sponsor with id=${id}. Or Sponsor was not found!`,
        });
      } else {
        res
          .status(200)
          .send({ message: "Sponsor's details were updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + " -: Error updating Sponsor with id=" + id,
      });
    });
};

// Delete a Sponsor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sponsor.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sponsor with id=${id}. Or Sponsor was not found!`,
        });
      } else {
        res.send({
          message: "Sponsor was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Sponsor with id=" + id,
      });
    });
};

// Create more controller functions here...
