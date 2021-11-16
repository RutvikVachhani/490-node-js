//Connect to database
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "COMP490",
  password: "1234",
  database: "practice",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
