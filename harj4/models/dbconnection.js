var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
module.exports = conn;
