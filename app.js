var   faker = require("faker"),
      mysql = require("mysql")

var connection = mysql.createConnection({
   host:       "localhost",
   user:       "root",
   password:   "kmyxctxe"
})

      console.log("")

for (var i = 0; i < 10; i++){
   var randomEmail = console.log(faker.name.firstName() + " " + faker.name.lastName())
   var randomEmail = console.log(faker.internet.email())
   console.log("")
}

var q = "SELECT 1"
connection.connect(function(error) {
   if (error) throw error
   console.log("Connected!")
})
connection.end()