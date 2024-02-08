
-- JOINS

-- INNER JOIN:

-- Use an INNER JOIN when you want to retrieve only the rows that have matching values in both tables based on the specified condition.
-- It's commonly used when you need to combine data from two tables where there is a relationship between them.
-- LEFT JOIN:

-- Use a LEFT JOIN when you want to retrieve all rows from the left table (the table specified first in the JOIN clause), along with matching rows from the right table based on the specified condition.
-- It ensures that all rows from the left table are included in the result, even if there are no matching rows in the right table.
-- It's useful for scenarios where you want to include all records from one table and only matching records from the other table.

-- RIGHT JOIN:

-- Use a RIGHT JOIN when you want to retrieve all rows from the right table (the table specified second in the JOIN clause), along with matching rows from the left table based on the specified condition.
-- It ensures that all rows from the right table are included in the result, even if there are no matching rows in the left table.
-- Although RIGHT JOIN is less commonly used than LEFT JOIN, it can be useful in specific situations where you want to ensure all records from the right table are included.

-- SYNTAX OF AN INNER JOIN

SELECT column_names
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

-- SYNTAX OF LEFT JOIN
SELECT column_names 
FROM table1
LEFT JOIN table2
ON table_one.column_name = table_two.column_name;