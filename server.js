// Dependencies
var express = require("express");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware to set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });