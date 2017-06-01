//require express
var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database functions
// var burger = require("../models/burger.js");

// import db models to use database and display html
var db = require("../models");

router.get("/", function (req, res) {
        //return all entries from burger table
        db.Burger.findAll({}).then(function(dbBurger) {
            //all burgers can be accessed as an argument in the callback function
            var burgerObject = {
                burgers: dbBurger
            }
            res.render("index", burgerObject);
        });
});

router.post("/", function (req, res) {
        //we are adding a new object to our table, in this case only burger_name
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function(dbBurger) {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
        //we take in an object describing the properties we want to update
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });
});

//export routes for server.js to use.
module.exports = router;

