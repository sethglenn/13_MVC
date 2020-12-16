// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  
  connection = mysql.createConnection({
    host: "bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "x5rwime2s0jpqgfv",
    password: "yi48537ar6g46vfa",
    database: "c79rmfxltq6c5nvz"
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

// Export connection for our ORM to use.
connection.connect()
module.exports = connection;