/*Mahdollisiman yksinkertinen chatti Socket.io:lla
 * Socket.io:n toimita perustuu eventteihin. Socket
 * periin Noden events.eventEmitter -luokan  joten se
 * voi emittoida eventtejä.
 * 
 * Projektiin pitää asentaa socket.io: npm install socket.io
 */

var http = require('http');
var fs = require('fs');
 
//http-serveri joka laitetaan muuttujaan app tuottaa sivun client.html
var app = http.createServer(function (req, res) {
    fs.readFile("client.html", 'utf-8', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3010);
console.log('Http server in port 3010');
 
//Socket-serveri kuuntelee http-serveriä
var io = require('socket.io').listen(app);
 
//'connection'-tapahtuma suoritetaan joka kerta kun joku clientin 
//socket yhdistää serverin socket.io moduliin. Parametrina
//oleva muuttuja socket on viittaus clientin socketiin
io.sockets.on('connection', function(socket) {
    //Kun clientilta tulee 'message to server' -tapahtuma 
    socket.on('message_to_server', function(data) {
        //Lähetetään tullut data takaisin kaikille clientin socketeille
        //emitoimalla tapahtuma 'message_to_client' jolla lähtee JSON-dataa
        io.sockets.emit("message_to_client",{ message: data["message"] });
    });
});