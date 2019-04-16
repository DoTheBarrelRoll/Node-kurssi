var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies', {useMongoClient: true});

var db = mongoose.connection;

module.exports = db;
