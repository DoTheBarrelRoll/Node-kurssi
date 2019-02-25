const express = require('express');
const router = express.Router();
const db = require('../models/dbconnection.js');
const Student = require('../models/Student.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let query = Student.find({})
  Student.find({}, function(err, docs) {
    if (err) console.log(error);
    res.render('users', {
      title: 'Testi123',
      students: docs
    });
  })
});

module.exports = router;
