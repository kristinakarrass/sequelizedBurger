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
		//we are adding a new object to our table, in this case only burger_name
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
	//PUT route for updating burgers (get data from req.body)
	app.put("/api/burgers", function(req, res) {
		//we take in an object describing the properties we want to update
		db.Burger.update({
			burger_name: req.body.burger_name,
			devoured: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
};