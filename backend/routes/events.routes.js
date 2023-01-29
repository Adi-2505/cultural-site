module.exports = (app) => {
  // Importing controller to handle functions for each route
  const events = require("../controllers/events.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // Create a new event
  router.post("/", events.create);

  // Retrieve all events
  router.get("/", events.findAll);

  // Update a event with id
  router.put("/", events.update);

  // Create more routes here...

  // api endpoint
  app.use("/api/events", router);
};
