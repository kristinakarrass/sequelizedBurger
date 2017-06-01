//require express
var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

//create all my routes and set up logic within those routes where required
// router.get("/", function (req, res) {
// 	res.redirect('/burgers');
// });

router.get("/", function (req, res) {
        //return all entries from burger table
        db.Burger.findAll({}).then(function(dbBurger) {
            //all burgers can be accessed as an argument in the callback function
            res.json(dbBurger);
        });
});

router.post("/", function (req, res) {
        //we are adding a new object to our table, in this case only burger_name
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
});

router.put("/:id", function (req, res) {
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

// router.delete("/:id", function (req, res) {
// 	var condition = "id= " + req.params.id;

// 	burger.delete(condition, function() {
// 		res.redirect("/");
// 	});
// });

//export routes for server.js to use.
module.exports = router;

