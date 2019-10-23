// C2:17:306

var   	express = require("express"),
		app = express(),
		faker = require("faker"),
      	mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})

app.get("/", function(req, res){
	res.send("Hello from our web app!")
})

app.get("/joke", function(req, res){
	var q = "SELECT COUNT(*) AS numUsers FROM users;"
	connection.query(q, function(error, results, fields){
		if (error) {error}
		else {
			var s = "We have " + results[0].numUsers + " users in our databse"
			connection.end()
			res.send(s)
		}
					 })
})

app.listen(3000, process.env.IP, function() {
	console.log("The server is running...")
})