-- REMINDER OF MY SCHEMA

CREATE TABLE products(
    prod_name VARCHAR(255) NOT NULL,
    prod_desc VARCHAR(255) NOT NULL,
    price MONEY NOT NULL,
    stock INTEGER NOT NULL,
    category VARCHAR(50)[3] NOT NULL,
	images VARCHAR(255)[5] NOT NULL,
    -- color VARCHAR(30),
    pid SERIAL PRIMARY KEY
);
