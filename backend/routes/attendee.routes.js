module.exports = (app) => {
  // Importing controller to handle functions for each route
  const attendees = require("../controllers/attendee.controller.js");

  // creating a router to handle all the routes.
  var router = require("express").Router();

  // Register a new attendee
  router.post("/", attendees.create);

  // Create more routes here...

  // api endpoint
  app.use("/api/attendees", router);
};
