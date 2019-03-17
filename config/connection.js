// Set up MySQL connection.
require("dotenv").config();
const mysql = require("mysql");
const keys = require("../keys");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.database.secret, //contains my mySql Pass
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;