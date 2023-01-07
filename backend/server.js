const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to the database
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Importing api routes
require("./routes/attendee.routes")(app);

// Set port to listen for requests
const PORT = process.env.PORT;

// Starting server
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}...`);
});
