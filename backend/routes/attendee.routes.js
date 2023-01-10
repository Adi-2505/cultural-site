module.exports = (app) => {
  // Importing controller to handle functions for each route
  const attendees = require("../controllers/attendee.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // Register a new attendee
  router.post("/", attendees.create);

  // Retrieve all attendees
  router.get("/", attendees.findAll);

  // Retrieve a single attendee with id
  router.get("/:id", attendees.findOne);

  // Update a attendee with id
  router.put("/:id", attendees.update);

  // Delete a attendee with id
  router.delete("/:id", attendees.delete);

  // Create more routes here...

  // api endpoint
  app.use("/api/attendees", router);
};
