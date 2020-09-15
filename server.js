// ============================================================================
// DEPENDENCIES
// Requiring express, mongoose, and the schema/model to set up the API routes 
// ============================================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Require routes
app.use(require("./routes/api-routes.js")); // api-routes must precede the html-routes to populate the Last Workout....
app.use(require("./routes/html-routes.js"));
// app.use(require("./models/index.js"));

//? Note useNewUrlParse is deprecated and will be discontinued eventually. 
//? Use "useUnifiedTopology: true" to ensure deprecation does not destablize/break the application
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("Successfully connected to MDB via mongoose"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
