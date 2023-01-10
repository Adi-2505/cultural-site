module.exports = (app) => {
  // Importing controller to handle functions for each route
  const attendees = require("../controllers/attendee.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // Register a new attendee
  router.post("/",attendees.create);

  // Retrieve all Products
  router.get("/", attendees.findAll);

  // Retrieve a single Product with id
  router.get("/:id", attendees.findOne);

  // Update a Product with id
  router.put("/:id",attendees.update);

  // Delete a Product with id
  router.delete("/:id", attendees.delete);

  // Create more routes here...

  // api endpoint
  app.use("/api/attendees", router);
};
