var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: false, default: "Undefined" },
    director: { type: String, required: false },
    releaseDate: { type: Date, required: false },
    summary: { type: String, required: true}
});

module.exports = movieSchema;
