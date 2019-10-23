var   faker = require("faker"),
      mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})

      console.log("")

for (var i = 0; i < 10; i++){
   var randomEmail = console.log(faker.name.firstName() + " " + faker.name.lastName())
   var randomEmail = console.log(faker.internet.email())
   console.log("")
}

var q = "SELECT CURTIME() AS time, CURDATE() as date, NOW() AS now"
connection.query(q, function(error, results, fields) {
   if (error) {console.log(error)}
	else {
   		console.log(results[0].time)
		console.log(results[0].date)
		console.log(results[0].now)
	}
})
connection.end()