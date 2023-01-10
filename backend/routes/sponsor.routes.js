module.exports = (app) => {
  // Importing controller to handle functions for each route
  const sponsors = require("../controllers/sponsor.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // Register a new sponsor
  router.post("/", sponsors.create);

  // Retrieve all sponsors
  router.get("/", sponsors.findAll);

  // Retrieve a sponsor Product with id
  router.get("/:id", sponsors.findOne);

  // Update a sponsor with id
  router.put("/:id", sponsors.update);

  // Delete a sponsor with id
  router.delete("/:id", sponsors.delete);

  // Create more routes here...

  // api endpoint
  app.use("/api/sponsors", router);
};
