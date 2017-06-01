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
    burger.all(function(data) {
        var burgObject = {
          burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/", function (req, res) {
    console.log(req.body);
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
      devoured: true
    }, condition, function() {
      res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
	var condition = "id= " + req.params.id;

	burger.delete(condition, function() {
		res.redirect("/");
	});
});

//export routes for server.js to use.
module.exports = router;

