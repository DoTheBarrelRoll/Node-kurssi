var mongoose = require('mongoose');
var movieSchema = require('./Movie.js');
var userSchema = require("./User.js")

var ratingSchema = new mongoose.Schema({
    grade: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    user: {
        type: userSchema,
        required: false
    }
});

module.exports = ratingSchema;
