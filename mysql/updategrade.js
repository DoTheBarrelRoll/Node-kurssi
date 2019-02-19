const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "UPDATE grades SET grade = 5 WHERE student_code = 9877 AND course_code = 'Node kehitys'";

conn.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

conn.end();
