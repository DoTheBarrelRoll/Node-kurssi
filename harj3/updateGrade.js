var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');

Student.findOneAndUpdate(
  {student_code: '0000', 'grades.course_code': 'HTS1003'},
  {"$set": { "grades.$.grade": 4}},
  function(err, success) {
    if(err) console.log(err);
    else console.log(success);
  });
