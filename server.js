//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

//require models for syncing
var db = require("./models");

//Serve static conent for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + "/public"));

//Parse application
app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

require("./routes/html-routes.js");
require("./routes/api-routes.js");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    	console.log("App listening on PORT " + PORT);
    });	
});
