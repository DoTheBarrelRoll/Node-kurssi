const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "SELECT * FROM students WHERE study_points < 100";

conn.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

conn.end();
