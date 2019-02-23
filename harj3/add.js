var db = require('./dbconnection.js')
var mongoose = require('mongoose');
var Student = require('./models/Student.js');


var oppilas = new Student({student_code: '0000', name: 'Olli Opiskelija', email: 'olliopiskelija@jamk.fi', study_points: 120, grades: [{course_code: "node kehitys", grade: 3}]});


oppilas.save(function(err, oppilas) {
  if (err) {
    console.log(err);
  }
});

Student.find(function (err, students) {
  if (err) {
    console.log(err);
  }
  console.log(students);
  db.close();
});
