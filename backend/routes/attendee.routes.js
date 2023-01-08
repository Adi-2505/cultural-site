module.exports = (app) => {
  // Importing controller to handle functions for each route
  const attendees = require("../controllers/attendee.controller.js");
  // creating a router to handle all the routes.
  var router = require("express").Router();

  // For Validation of Input
  const { check, validationResult } = require("express-validator");

  // Create Middlware for validation
  let validationArray = [
    check("name").notEmpty().withMessage("Field Name cannot be Empty").trim().isLength({ max: 20 }).withMessage("Length of Name should be Less than 20").escape(),
    check("gender").notEmpty().withMessage("Field Gender cannot be Empty").trim().escape(),
    check("college").notEmpty().withMessage("Field College Name cannot be Empty").trim().isLength({ max: 30 }).withMessage("Length of College Name should be Less than 30").escape(),
    check("email").isEmail().withMessage("Invalid Email Entered").notEmpty().withMessage("Field Email cannot be Empty").trim().normalizeEmail().isLength({ max: 30 }).withMessage("Length of Email id should be Less than 30").toLowerCase().escape(),
    check("contact").isMobilePhone().withMessage("Invalid Mobile NUmber").notEmpty().withMessage("Field Contact Detail cannot be Empty").trim().escape()
  ];


  // Register a new attendee
  router.post("/", validationArray, attendees.create);

  // Retrieve all Products
  router.get("/", attendees.findAll);

  // Retrieve a single Product with id
  router.get("/:id", attendees.findOne);

  // Update a Product with id
  router.put("/:id",validationArray,attendees.update);

  // Delete a Product with id
  router.delete("/:id", attendees.delete);

  // Create more routes here...

  // api endpoint
  app.use("/api/attendees", router);
};
