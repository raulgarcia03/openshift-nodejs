var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.send('Hello, JORGE RAUL!');
	var i=0;
	while(i <= 10){
		res.send('Paso:'+i);
		i++;
	}

});

app.listen(PORT);
console.log("Started on localhost:" + PORT);
