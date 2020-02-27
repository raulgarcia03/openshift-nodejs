var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.send('Hello, Mundo!');
});

app.listen(PORT);
console.log("Started on localhost:" + PORT);
