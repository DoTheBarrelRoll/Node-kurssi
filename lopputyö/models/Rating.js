var mongoose = require('mongoose');
var movieSchema = require('./Movie.js');
var userSchema = require("./User.js")

var ratingSchema = new mongoose.Schema({
    movie: {
        type: movieSchema,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    user: {
        type: userSchema,
        required: true
    }
});

module.exports = ratingSchema;
