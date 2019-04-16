var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: false, default: "Undefined" },
    director: { type: String, required: false },
    releaseDate: { type: String, required: false },
    summary: { type: String, required: true}
});

var Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
