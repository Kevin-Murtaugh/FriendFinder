//htmlroutes.js --maybe this blongs in apiroutes?
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //need JSON version of this command + check the path/filename.etc.
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/data/friends.js"));
  });

  app.post("/app/data/friends.js", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    //if (tableData.length < 5) {
      frienddata.push(req.body);
      res.json(true);
    //}
    //else {
    //  waitListData.push(req.body);
    //  res.json(false);
   // }
  });
}

//code possibly useful soon...
//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });
// };

// // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
