var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');

Student.deleteOne({student_code: 't1234'}, function (err) {
  if (err) return handleError(err);
  console.log('Student deleted succesfully.')
  db.close();
});
