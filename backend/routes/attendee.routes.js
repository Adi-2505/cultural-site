module.exports = (app) => {
  // Importing controller to handle functions for each route
  const attendees = require("../controllers/attendee.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // For Validation of Input
  const { check, validationResult } = require("express-validator");

  // Create Middlware for validation
  let validationArray = [
    check("name").notEmpty().trim().isLength({ max: 20 }),
    check("gender").notEmpty().trim(),
    check("college").notEmpty().trim().isLength({ max: 30 }),
    check("email")
      .isEmail()
      .notEmpty()
      .trim()
      .normalizeEmail()
      .isLength({ max: 30 }),
    check("contact").isMobilePhone().notEmpty().trim(),
  ];

  // Register a new attendee
  router.post("/", validationArray, attendees.create);

  // Retrieve all Products
  router.get("/", attendees.findAll);

  // Retrieve a single Product with id
  router.get("/:id", attendees.findOne);

  // Update a Product with id
  router.put("/:id", attendees.update);

  // Delete a Product with id
  router.delete("/:id", attendees.delete);

  // Create more routes here...

  // api endpoint
  app.use("/api/attendees", router);
};
