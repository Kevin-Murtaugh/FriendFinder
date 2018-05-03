//server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000

const friends = require('./app/data/friends.json');

// Expose the public directory to access CSS
app.use(express.static(path.join(__dirname, './app/public')));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/compare', (request, response) => {

  console.log(request.body);

  response.status(200).send(compareScores(request.body.name, request.body.photo, request.body.scores));

});


// open PORT to start listening
app.listen(PORT, function () {

  console.log('server.js is on PORT: ' + PORT);

});

function compareScores(name, url, scoresArr) {

  let friendsScores = [];

  for (let i = 0; i < friends.length; i++) {

    let sumOfDiffs = 0;

    for (let j = 0; j < friends[i].scores.length; j++) {

      sumOfDiffs += Math.abs(friends[i].scores[j] - scoresArr[j]);

    }

    friends[i].sumOfDiffs = sumOfDiffs;

    console.log(`${friends[i].name} => ${sumOfDiffs}`);

  }

  return friends.reduce((prev, current) => {

    return (prev.sumOfDiffs < current.sumOfDiffs) ? prev : current;

  });

}