// C2:16:289

var   faker = require("faker"),
      mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})


for (var i = 0; i < 500; i++){
	var randomEmail = {email: faker.internet.email()}
	connection.query("INSERT INTO users SET ?", randomEmail, function(error, results, fields) {
   		if (error) {console.log(error)}
	})
}

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