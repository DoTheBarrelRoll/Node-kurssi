const db = require('./config/dbconnection');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

var leffa = new Movie ({
    name: "Titanic",
    genre: "Drama, Romance",
    director: "James Cameron",
    releaseDate: "1997",
    summary: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
});

leffa.save((err, leffa) => {
    if (err) {
        console.log(err)
    }
});

Movie.find((err, leffa) => {
    if (err) console.log(err);
    console.log(leffa);
    db.close();
});