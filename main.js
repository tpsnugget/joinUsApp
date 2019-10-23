// C2:16:292

var   faker = require("faker"),
      mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})

var randomEmail = []
for (var i = 0; i < 500; i++){
	randomEmail.push(
		[faker.internet.email(),
		faker.date.past()]
	)
}

var q = "INSERT INTO users (email, created_at) VALUES ?"
connection.query(q, [randomEmail], function(error, results, fields) {
   	if (error) {console.log(error)}
})

var q = "SELECT COUNT(*) AS total FROM users;"
connection.query(q, function(error, results, fields) {
   if (error) {console.log(error)}
	else {
   		console.log("The total number of users is: ", results[0].total)
	}
})

// var q = "SELECT * FROM users;"
// connection.query(q, function(error, results, fields) {
//    if (error) {console.log(error)}
// 	else {
//    		console.log(results)
// 	}
// })

connection.end()