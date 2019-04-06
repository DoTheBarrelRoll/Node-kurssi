// Handleri sivuston tarjoamista varten
var handler = function(req, res) {
    fs.readFile('./sivu.html', (err, data) => {
        if(err) throw err;
        res.writeHead(200);
        res.end(data);
    });
}

// Alustetaan pelaajat-array ja vastaus-muuttuja
var users = [];
let vastaus;

// Tarpeelliset muuttujat ohjelman aloitusta varten
const app = require('http').createServer(handler);
const io = require('socket.io').listen(app);
const fs = require('fs');
const moniker = require('moniker');
const port = (3000);

app.listen(port);

// Luodaan socketit käyttäjille
io.sockets.on('connection', function(socket) {
    var user = addUser();   // Luodaan pelaajalle oma käyttäjänimi
    uusiPeli();             // Arvotaan arvattava numero
    io.emit('peli', {message: user.name + ' liittyi peliin, tervetuloa! 🙂'}) // Viesti peli-ikkunaan, kun joku liittyy
    // Viesti, kun pelaaja poistuu, poistetaan myös käyttäjä listalta
    socket.on('disconnect', function() {
        io.emit('peli', {message: user.name + ' poistui pelistä. 😞'});
        deleteUser(user);
    });

    // Tapahtuma, kun saadaan käyttäjän arvaus pelistä
    socket.on("arvaus", function(data) {
        // Jos viesti ei ole tasaluku, lähetetään viestin sisältö viestinä peli-ikkunaan
        if(Number.isInteger(parseInt(data)) == false) {
            io.emit('peli', {message: user.name + ': ' + data})
        // tarkistetaan onko pelaajan arvaus oikessa, ja vastataan vastaavalla tavalla
        } else if(data == vastaus) {
            // Jos vastaus on oikein, kerrotaan se viestillä, nostetaan pelaajan voittojen määrää yhdellä
            // ja arvotaan uusi numero arvailtavaksi
            io.emit('peli', {message: '<strong>' + user.name + ' vastasi oikein! vastaus oli ' + vastaus + '</strong>'})
            user.wins++;
            updateUsers();
            uusiPeli();
            io.emit('peli', {message: 'Uusi numero on arvottu väliltä 1-30, ei kun arvailemaan!'})
        } else if (data < vastaus) {
            io.emit('peli', {message: 'pelaajan ' + user.name + ' arvaus ' + data + ' oli liian pieni.'})
        } else {
            io.emit('peli', {message: 'pelaajan ' + user.name + ' arvaus ' + data + ' oli liian suuri.'})
        }
    });
});

// Funktio, jolla annetaan liittyneelle pelaajalle nimi ja alustetaan voittojen määrä
var addUser = function() {
    var user = {
        name: '',
        wins: 0
    }
    user.name = moniker.choose();
    users.push(user);
    updateUsers();
    return user;
};

// Funktio, jolla poistetaaan käyttäjä kun hän poistuu sivustolta
var deleteUser = function(user) {
    for(var i = 0; i < users.length; i++) {
        if(user.name === users[i].name) {
            users.splice(i, 1);
            updateUsers();
            return;
        }
    }
};

// Funktio, jolla päivitetään pelaajalista sivulle.
var updateUsers = function() {
    var str = '';
    for (var i = 0; i<users.length; i++) {
        var user = users[i];
        str += user.name + ' - Wins: ' + user.wins + '<br>';
    }

    io.sockets.emit("users", {users: str});
};

// Funktio, jolla arvotaan uusi numero
var uusiPeli = function() {
    vastaus = Math.floor(Math.random() * 30) + 1;
};

console.log('Listening on port ' + port);