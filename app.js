var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", function(req, res){
	var url = "https://fcc-weather-api.glitch.me/api/current?lon=139&lat=40"
	request(url, function(err, response, body){
		var data = JSON.parse(body);
		if(!err && res.statusCode === 200){
			console.log(data);
			res.render("landing", {data: data})
		}
	})
})

app.listen(3000, function(){
	console.log("listening on port 3000");
})