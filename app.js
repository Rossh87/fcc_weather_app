var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
	res.render("landing");
})

app.listen(3000, function(){
	console.log("listening on port 3000");
})