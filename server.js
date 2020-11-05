// Requiring necessary npm packages
var express = require("express");


var app = express(); // Creating express app 
var PORT = process.env.PORT || 8080; // Setting up port 


var db = require("./models"); // Require in models for syncing


app.use(express.static("public")); // Static directory
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-routes.js")(app); // Routes
require("./routes/html-routes.js")(app); // Routes


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
});
