const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../config/dbconnection');
const User = require('../models/User');
const movieSchema = require('../models/Movie');
const Movie = mongoose.model('movie', movieSchema);
const userSchema = require('../models/User');
const bcrypt = require('bcrypt');

let sess;

// Etusivu
router.get('/', (req, res) => {
    Movie.find({}, (err, docs) => {
        if (err) console.log(err);
        res.render('index', {
            leffat: docs
        });
    });
});

// Elokuvien omat sivut ID:n mukaan
router.get('/movie/:id', (req, res) => {
    Movie.find({ _id: req.params.id }, (err, docs) => {
        if (err) console.log(err);
        res.render('moviepage', {
            leffat: docs
        });
    });
});

router.get('/movie/:id/rate', (req, res) => {
    res.render('ratingpage');
});

// Käyttäjän rekisteröinti sivu
router.get('/register', (req, res) => {
    sess = req.session;
    res.render('register', {
        errors: sess.errors
    });
    req.session.errors = null;
});

// Tietojen syöttö reitti
router.post('/register', (req, res) => {
    sess = req.session;
    var errors = null;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('pass1', 'Password is required').notEmpty();
    req.checkBody('pass2', 'Please confirm password').notEmpty();
    //req.checkBody('pass1', 'Passwords don\'t match').equals('pass2');

    errors = req.validationErrors();
    // console.log(errors);
    // jos on validaatiovirheitä, pysytään kirjautumissivulla
    if (errors) {
        sess.errors = errors; // virheet sessioon josta ne voidaan näyttää kirjautumissivulla
        res.redirect('/register');
        // muuten siirrytään reittiin sivu1 jossa tarkistetaan passwordin oikeellisuus
    } else {
        // Jos tiedot oikein, tallennetaan käyttäjä ja kirjaudutaan sisään
        var hashPassu = bcrypt.hashSync(req.body.pass1, 8);
        var userinfo = {
            username: req.body.username,
            password: hashPassu
        };
        User = mongoose.model('user', userSchema);
        var user = new User(userinfo);
        user.save();

        sess.login = true;
        sess.username = req.body.username; // sess.email saa arvon login-sivulta (index.ejs)
        res.redirect('/');
        console.log(sess);
    }
});

module.exports = router;

