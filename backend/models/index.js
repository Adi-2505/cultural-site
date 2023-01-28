const dbConfig = require("../config/db.config.js");

// Initializing mongoose to access MongoDB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

const db = {};
db.mongoose = mongoose;

// Setting up the database constants
db.url = dbConfig.url;
db.attendees = require("./attendee.model.js")(mongoose);
db.sponsors = require("./sponsor.model.js")(mongoose);
<<<<<<< HEAD
db.events = require("./events.model.js")(mongoose);
=======
db.verification = require("./verification.model.js")(mongoose);
>>>>>>> main

module.exports = db;
