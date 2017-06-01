// Dependencies
//======================================================================
var path = require("path");

//Routes exported for use
//======================================================================
module.exports = function(app) {
	//the below routes handle the HTML page the user is sent to

	//index route loads view.html
    app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname + "/../public/view.html"));
    });
};