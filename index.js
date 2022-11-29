var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var DESTINATION_VERIFICATION_TOKEN = '123456'

app.use(bodyParser.json());

app.listen(80, function() {
    console.log('Server started. Listening on port 80.');
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/destination', function(req, res) {
    if (req.headers['verification_token'] === DESTINATION_VERIFICATION_TOKEN) {
        console.log('Destination verified by token');
        return res.send(req.query.challenge);
    }

    console.log('Destination not verified by token');
    res.sendStatus(400);
});

app.post('/destination', function(req, res) {
    console.log(req.body);
})

