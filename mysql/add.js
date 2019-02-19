const config = require('./connect.js');
const mysql = require('mysql');
const conn = mysql.createConnection(config);

let sql = "INSERT INTO students(student_code, name, email, study_points) VALUES ('testi', 'Testi Uuseri', 'testiuuseri@jamk.fi', 70)";

conn.query(sql);

conn.end();
