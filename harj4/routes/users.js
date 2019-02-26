const express = require('express');
const router = express.Router();
const db = require('../models/dbconnection.js');
const Student = require('../models/Student.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  sess = req.session
  if (sess.pass === "qwerty") {
    let query = Student.find({})
    Student.find({}, function(err, docs) {
      if (err) console.log(error);
      res.render('sivu3', {
        title: 'Opiskelijoiden tiedot',
        students: docs
      });

    })
  } else {
    res.render('error', { // jos passu väärä, mennään error-sivulle
        message: 'Et ole kirjautunut tai salasanasi on väärä',
    });
  }
});

router.get('/sivu3', function(req, res, next) {
  sess = req.session
  if (sess.pass === "qwerty") {
    let query = Student.find({})
    Student.find({}, function(err, docs) {
      if (err) console.log(error);
      res.render('users', {
        title: 'Opiskelijoiden tiedot',
        students: docs
      });

    })
  } else {
    res.render('error', { // jos passu väärä, mennään error-sivulle
        message: 'Et ole kirjautunut tai salasanasi on väärä',
    });
  }
});



module.exports = router;
