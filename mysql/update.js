const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "UPDATE students SET study_points = 200 WHERE student_id = 1234";

conn.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

conn.end();
