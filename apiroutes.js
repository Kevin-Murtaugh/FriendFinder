// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  //need JSON version of this command + check the path/filename.etc.
  app.get("/api/friends", function(req, res) {
    res.sendFile("friends.js", {"root": __dirname + '/app/data'});
  });

  app.post("/api/friends", function(req, res) {
      var jsonFriends = fs.readFileSync('./app/data/friends.json');
      var friends = JSON.parse(jsonFriends);
      friends.push(req.body.friend);
      fs.writeFileSync('./app/data/friends.json', JSON.stringify(friends));

      var bestFriend = compareScores(req.body.friend.scores);
      console.log(bestFriend);
      res.json(bestFriend);
  });

  function compareScores(scoresArr) {

    let friends = JSON.parse(fs.readFileSync('./app/data/friends.json'));
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
}
