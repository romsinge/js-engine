// Require all the needed node modules
var express = require('express');

// Create an express object
var app = express();

// Get the URL path
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('It works !');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'ERROR 404 - NOT FOUND');
});

// Listen to the specified port
app.listen(8000);