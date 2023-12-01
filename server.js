// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path"); // Add path module for file operations

// Sets up the express app
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/public/assets", express.static(__dirname + "/public/assets"));
app.use(express.static('public'));

// Require routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
