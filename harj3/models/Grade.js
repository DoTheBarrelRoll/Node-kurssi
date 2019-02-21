var mongoose = require('mongoose');

var gradeSchema = new mongoose.Schema({
  course_code: {type: String, required: true},
  grade: {type: Number, required: true, minimum: 0, maximum: 5}
});

module.exports = gradeSchema;
