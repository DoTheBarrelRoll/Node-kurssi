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
    email: {
        type: String,
        required: true
    },
    ratings: [ratingSchema]
});

var User = mongoose.model('user', userSchema);

module.exports = userSchema;