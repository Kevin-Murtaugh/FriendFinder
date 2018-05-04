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
<<<<<<< HEAD
=======

console.log(friends);
>>>>>>> 08888ea614cb7f7afe8e7efa57ed4413dc419ce2

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
<<<<<<< HEAD
=======

// app.post('/compare', (request, response) => {

//   console.log(request.body);

//   response.status(200).send(compareScores(request.body.name, request.body.photo, request.body.scores));

// });

>>>>>>> 08888ea614cb7f7afe8e7efa57ed4413dc419ce2

// open PORT to start listening
app.listen(PORT, function () {

  console.log('server.js is on PORT: ' + PORT);

});