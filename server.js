var express = require("express");

var app = express();
var port = 3000;

var jeff = {
	name: "Jeff Tremaine",
	phoneNumber: 2132208989,
	email: "Jeff@yahoo.com"
	uniqueId: "JeffT"
};

var kevin = {
	name: "Kevin Corso",
	phoneNumber: 2139119119,
	email: "KevCorso@gmail.com",
	uniqueId: "TitsMcgee"
};


app.get("/", function(req, res) {
	res.send("Make Your Reservation!");
});

app.get("/jeff", function(req, res) {
	res.json(jeff);
});

app.get("/kevin", function(req, res) {
	res.json(kevin);
});
