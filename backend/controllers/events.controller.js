const db = require("../models");

// Importing the Events schema model
const Events = db.events;

// function to create a new Event
exports.create = async (req, res) => {
  // Create a Event from request body.
  const event = new Events(req.body);

  // Save Event details in the database
  event
    .save(event)
    .then((data) => {
      res.status(200).send({ message: "Event created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Event.",
      });
    });
};

// Retrieve all events or specific event by name from the database.
exports.findAll = (req, res) => {
  const event = req.query.event;
  var condition = event
    ? { name: { $regex: new RegExp(event), $options: "i" } }
    : {};

  Events.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving event data.",
      });
    });
};

// Add a attendee by the id in the request body
exports.update = (req, res) => {
  const event = req.body.event;
  const attendee = req.body.attendee;

  Events.findOneAndUpdate(
    { name: { $regex: new RegExp(event), $options: "i" } },
    { $push: { attendees: attendee } }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Event.`,
        });
      } else {
        res.status(200).send({ message: "Attendee was added successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + " -: Error updating Event with name=" + event,
      });
    });
};

// Create more controller functions here...
