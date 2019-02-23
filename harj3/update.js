var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');

Student.updateOne({student_code: '0000'}, { $set: { study_points: 150 }});
