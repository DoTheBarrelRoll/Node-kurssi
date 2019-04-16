const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
    Movie.find({}, (err, docs) => {
        if(err) console.log(err);
        res.render('index', {
            leffat: docs
        });
    });
});

module.exports = router;

