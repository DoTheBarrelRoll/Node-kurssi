var handler = function(req, res) {
    fs.readFile('./sivu.html', (err, data) => {
        if(err) throw err;
        res.writeHead(200);
        res.end(data);
    });
}

const app = require('http').createServer(handler);
const io = require('socket.io').listen(app);
const fs = require('fs');
const moniker = require('moniker');
const port = (3000);

app.listen(port);

io.sockets.on('connection', function(socket) {
    var user = addUser();
    socket.emit("Welcome", user);
    socket.on('disconnect', function() {
        removeUser(user);
    });
    socket.on("")
})

console.log('Listening on port ' + port);