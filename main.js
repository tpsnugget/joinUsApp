// FINAL VERSION

var   	express = require("express"),
		app = express(),
		faker = require("faker"),
      	mysql = require("mysql"),
		bodyParser = require("body-parser")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/", function(req, res){
	res.redirect("/emails")
})

app.get("/emails", function(req, res){
	var q = "SELECT COUNT(*) AS numUsers FROM users;"
	connection.query(q, function(error, results, fields){
		if (error) {error}
		else {
			var s = "We have " + results[0].numUsers + " users in our databse"
			res.render("index",{count: results[0].numUsers})
		}
					 })
})

// POST route to add new e-mail to database
app.post("/emails", function(req, res){
	var q = "INSERT INTO users(email) VALUES ('" + req.body.newEmail + "');"
	console.log(q)
	connection.query(q, function(error, results, fields){
		if (error) {console.log(error)}
		console.log("Results are: ")
		// console.log(results)
		res.redirect("/emails")
	})
})

app.listen(3000, process.env.IP, function() {
	console.log("The server is running...")
})