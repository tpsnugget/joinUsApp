// C2:16:285

var   faker = require("faker"),
      mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   database:   "joinUsApp"
})

//       console.log("")

// for (var i = 0; i < 10; i++){
//    var randomEmail = console.log(faker.name.firstName() + " " + faker.name.lastName())
//    var randomEmail = console.log(faker.internet.email())
//    console.log("")
// }

// var q = "INSERT INTO users(email) VALUES ('mikegiebner@gmail.com');"
// var q = "SELECT * FROM users;"
var q = "SELECT COUNT(*) AS total FROM users;"
connection.query(q, function(error, results, fields) {
   if (error) {console.log(error)}
	else {
   		console.log("The total number of users is: ", results[0].total)
	}
})
connection.end()