var mongoose = require('mongoose');
var ratingSchema = require('./Rating.js');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    ratings: {
        type: 
    }
});

module.exports = userSchema;