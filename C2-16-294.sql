-- Challenge 1 --
-- Find earliest Data a user joined --
# SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date
# FROM users;

-- Challenge 2 -- 
-- Find e-mail of the first (earliest) user --
# SELECT email, created_at
# FROM users
# ORDER BY created_at
# LIMIT 1;

# -- Using a subquery --
# SELECT email, created_at
# FROM users
# WHERE created_at=(SELECT MIN(created_at) FROM users);

-- Challenge 3 --
-- Show Month name and count of users who signed up during that month --
# SELECT MONTHNAME(created_at) AS "month", COUNT(*) AS "count"
# FROM users
# GROUP BY month
# ORDER BY count DESC;

-- Challenge 4 --
-- Count the number of users with Yahoo emails --
# SELECT COUNT(*) AS yahoo_users
# FROM users
# WHERE email LIKE "%@yahoo.com";

-- Challenge 5 --
-- Show provider, total for gmail, yahoo, hotmail, other --
SELECT COUNT(*) AS total_users,
	CASE
		WHEN email LIKE "%@gmail.com" THEN "gmail"
		WHEN email LIKE "%@yahoo.com" THEN "yahoo"
		WHEN email LIKE "%@hotmail.com" THEN "hotmail"
		ELSE "other"
	END
	AS provider
FROM users
GROUP BY provider;

-- The COUNT(*) AS total_users can come after the CASE statement to change the
-- display order if desired
SELECT 
	CASE
		WHEN email LIKE "%@gmail.com" THEN "gmail"
		WHEN email LIKE "%@yahoo.com" THEN "yahoo"
		WHEN email LIKE "%@hotmail.com" THEN "hotmail"
		ELSE "other"
	END
	AS provider,
	COUNT(*) AS total_users
FROM users