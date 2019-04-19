const db = require('./config/dbconnection');
var mongoose = require('mongoose');
var movieSchema = require('./models/Movie');
var ratingSchema = require('./models/Rating');
var Movie = mongoose.model('movie', movieSchema);
var arvosana = mongoose.model('rating', ratingSchema);

arvosana = { grade: 5, comment: "Melko jännittävä elokuva" };

Movie.findOneAndUpdate(
    { name: 'Fight Club' },
    { $push: { ratings: arvosana } },
    function (err, success) {
        if (err) console.log(err);
        else console.log(success);
    });
