const mysql = require("mysql2");

/* connect to database */
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your mySQL username
    user: 'root',
    // Your MySQL
    password: 'Sohamaged',
    database: 'election'
  },
  console.log("Connected to the election database.")
);

module.exports = db;