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

  app.get("/survey", function(req, res) {
    res.sendFile("survey.html", {"root": __dirname + '/app/public'});
  });

  app.get("*", function(req, res) {
    res.sendFile("home.html", {"root": __dirname + '/app/public'});
  });
}
