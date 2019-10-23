# Version 1: Had to go back to goorm.io since I could not get node to connect to
#  my local mysql db

# C2:16:285
Went into goorm.io mysql and created the table manually
USE joinUsApp;

CREATE TABLE users(
   email VARCHAR(255) PRIMARY KEY,
   created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email)
VALUES
("Katie34@yahoo.com"),
("Tunde@gmail.com");

# C2:16:289
- Learned how to add a variable into a connection.query command

# C2:16:291
Colt added the loop to insert multipe entries to the database and I updated mine
   so the dates were not all the same
He also showed how to do a bulk insert as opposed to 500 db queries the way I
   initially did it. My way was very slow.