var express = require('express');
var bodyParser = require('body-parser');

// var food = require('./routes/food');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// app.use('/pros', pros);

app.listen(port, function () {
    console.log('up and running on port', port);
});