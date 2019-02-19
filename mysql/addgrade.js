const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "INSERT INTO grades(student_code, course_code, grade) VALUES (9877, 'Node kehitys', 4)";

conn.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

conn.end();
