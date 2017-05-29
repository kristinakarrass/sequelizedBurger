// requiring our models from the models folder
var db = require("../models");

// routes
//=======================================================================
module.exports = function(app) {
	//GET route for getting all burgers (devoured and not devoured)
	app.get("/api/burgers", function(req, res) {
		//return all entries from burger table
		db.Burger.findAll({}).then(function(dbBurger) {
			//all burgers can be accessed as an argument in the callback function
			res.json(dbBurger);
		});
	});
	//POST route for saving a new burger
	app.post("/api/burgers", function(req, res) {

	});
	//PUT route for updating burgers (get data from req.body)
	app.put("/api/burgers", function(req, res) {

	});
};