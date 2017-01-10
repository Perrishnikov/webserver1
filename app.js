var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Hello World!');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

}).listen(1337, '127.0.0.1');