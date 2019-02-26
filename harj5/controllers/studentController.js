const Student = require('../models/Student.js');

exports.findOne = (req, res) => {
  Student.findById(req.params.studentId)
  .then(student => {
    if(!student) {
      return res.status(404).send({
        message: "Student not found with specified Id" + req.params.studentId
      });
    }
    res.send(student);
  }).catch(err => {
    if (err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Student not found with specified Id " + req.params.studentId
      })
    }
    return res.status(500).send({
      message: "Could not delete note with id " + req.params.studentId
    });
  })
};

exports.findAll = (req, res) => {
  Student.find({})
  .then(student => {
    if(!student) {
      return res.status(404).send({
        message: "Students not found"
      });

    }
    res.send(student);
  })
};

exports.delete = (req, res) => {
  Student.findOneAndRemove({_id: req.params.studentId})
  .then(student => {
    if(!student) {
      return res.status(404).send({
        message: "Student not found with specified Id " + req.params.studentId
      });
    }
    res.send("Deleted Successfully " + student)
  })
};

exports.update = (req, res) => {

};

exports.create = (req, res) => {
  var oppilas = new Student({
    student_code: req.body.student_code,
    name: req.body.name,
    email: req.body.email,
    grades: [
      req.body.grades.forEach(function(course) {
        {course_code: course.course_code, grade: course.grade}
      })
    ]
  });
  oppilas.save()
  .then(student => {
    if(!student) {
      res.status(404).send({
        message: "Request body was empty, no student added"
      });
    }
    res.send("Student succesfully added, " + student);
  }).catch(err => {
    res.status(404).send("")
  });
};
