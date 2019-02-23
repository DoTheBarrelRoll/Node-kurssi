var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');

var arvosana = {course_code: "HTS1003", grade: 3};

Student.findOneAndUpdate(
  {student_code: 't1234'},
  {$push: { grades: arvosana}},
  function(err, success) {
    if(err) console.log(err);
    else console.log(success);
  });
