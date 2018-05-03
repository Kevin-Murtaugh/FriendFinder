//server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
var htmlRoutes = require('./htmlroutes');
var apiRoutes = require('./apiroutes');
var fs = require('fs');

const friends = './app/data/friends.js';

console.log(friends);

// Expose the public directory to access CSS
app.use(express.static(path.join(__dirname, '/app/public')));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

// app.post('/compare', (request, response) => {

//   console.log(request.body);

//   response.status(200).send(compareScores(request.body.name, request.body.photo, request.body.scores));

// });


// open PORT to start listening
app.listen(PORT, function () {

  console.log('server.js is on PORT: ' + PORT);

});