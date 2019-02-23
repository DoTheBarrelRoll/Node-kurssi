var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');

Student.find({study_points: {$lt: 100}}, function(err, docs) {
  if (err) {
    console.log(err);
  }
  console.log(docs);
  db.close(); 
});
