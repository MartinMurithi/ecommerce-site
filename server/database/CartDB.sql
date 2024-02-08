CREATE TABLE cart (
	cart_id SERIAL PRIMARY KEY,
	pid INT,
	qty INTEGER NOT NULL,
	CONSTRAINT fk_products
		FOREIGN KEY(pid)
		REFERENCES products(pid)
)