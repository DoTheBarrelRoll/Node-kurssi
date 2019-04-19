const express = require('express');
const router = express.Router();
const db = require('../config/dbconnection');
const Movie = require('../models/Movie');

// Etusivu
router.get('/', (req, res) => {
    Movie.find({}, (err, docs) => {
        if(err) console.log(err);
        res.render('index', {
            leffat: docs
        });
    });
});

// Elokuvien omat sivut ID:n mukaan
router.get('/movie/:id', (req, res) => {
    console.log(req.params.id)
    Movie.find({_id: req.params.id}, (err, docs) => {
        if(err) console.log(err);
        res.render('moviepage', {
            leffat: docs
        });
    });
});

// Käyttäjän rekisteröinti sivu
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/submit', (req,res) => {

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('pass1', 'Password is required').notEmpty();
    req.checkBody('pass2', 'Please confirm password').notEmpty();
    // Salasana on kovakoodattu tähän yksinkertaisuuden vuoksi.
    // Seuraavissa tehtävissä se tulee kannasta ja on kryptattu
    

    const errors = req.validationErrors();
    // console.log(errors);
    // jos on validaatiovirheitä, pysytään kirjautumissivulla
    if (errors) {
        sess.errors = errors; // virheet sessioon josta ne voidaan näyttää kirjautumissivulla
        res.redirect('/');
        // muuten siirrytään reittiin sivu1 jossa tarkistetaan passwordin oikeellisuus
    } else {
        // sess.success = true;
        // sess.email = req.body.email; // sess.email saa arvon login-sivulta (index.ejs)
        sess.pass = req.body.pass; // sess.pass saa arvon login-sivulta (index.ejs)
        res.redirect('/');
    }
});

module.exports = router;

