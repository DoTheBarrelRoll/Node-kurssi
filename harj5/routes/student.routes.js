

module.exports = (app) => {
  const students = require('../controllers/studentController.js');

  // Create a new student
  app.post('/students', students.create);

  // Retrieve all students
  app.get('/students', students.findAll);

  // Retrieve a single student with studentId
  app.get('/students/:studentId', students.findOne);

  // Update a student with studentId
  app.put('/students/:studentId', students.update);

  // Delete a student with studentId
  app.delete('/students/:studentId', students.delete);

  //Update a grade
  app.put('/students/:studentId/:gradeId', students.updateGrade);

  //Add a grade
  app.post('/students/:studentId', students.addGrade);
}
