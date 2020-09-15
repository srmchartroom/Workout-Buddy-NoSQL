// =====================================================================================================
// DEPENDENCIES
// Requiring express, express.router, and path to establish our HTML routes
// =====================================================================================================

const express = require("express"); // require express
const router = express.Router(); // require express router
const path = require("path"); // require path for 

// =======================================================================================
// HTML ROUTES
// Establish routes when called from the HTML to deliver the correct HTML paths and pages
// =======================================================================================

// "/" route - returns index.html when the default host, dirname, or root serving this app is called
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// "/exercise" route - returns exercise.html when the default route is followed by "/exercise"
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// "/stats" route - returns stats.html when the default route is followed by "/stats"
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

});

module.exports = router;