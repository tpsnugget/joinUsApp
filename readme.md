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