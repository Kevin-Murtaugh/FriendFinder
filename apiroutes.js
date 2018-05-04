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
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    //if (tableData.length < 5) {
      // fs.readFileSync(friends file path)
      // parse the object into a JS object
      // push new friend object from body
      // parse object back to JSON
      // fs.writefilsync to write the JSON back to the file

      //var jsonFriends = fs.readFileSync(friends);
      //var friendArray = JSON.parse(jsonFriends);
      var bestFriend = compareScores(req.body.friend.scores);
      console.log(bestFriend);
      res.json(bestFriend);
  });

  function compareScores(scoresArr) {
      console.log(scoresArr);
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
