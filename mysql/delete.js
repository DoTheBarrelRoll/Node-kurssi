const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "DELETE FROM students where student_id = 1234";

conn.query(sql);

conn.end();
