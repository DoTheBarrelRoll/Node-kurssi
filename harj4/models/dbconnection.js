var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin', {userMongoClient: true});

var db = mongoose.connection;

module.exports = db;
