require('dotenv').config()

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
var express = require("express");
var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 5000;

// Set up MySQL connection.
var connection;
if (process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else{

var connection = mysql.createConnection({
  host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "hs7mks66jrkzuulp",
  password: "e1kbxsv7ohijftsq",
  database: "rbmjrr64akkj3a7n"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Sets up the Express App
// =============================================================


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
