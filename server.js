//server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000

// Expose the public directory to access CSS
app.use(express.static(path.join(__dirname, './app/public')));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './apiRoutes'))(app);
require(path.join(__dirname, './htmlRoutes'))(app);

// open PORT to start listening
app.listen(PORT, function() {
  console.log('server.js is on PORT: ' + PORT);
});

















