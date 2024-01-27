const getProductsQuery = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const postProductsQuery =
  "INSERT INTO products (prod_name, prod_desc, price, stock, category, color) VALUES ($1, $2, $3, $4, ARRAY[$5, $6, $7], $8)";
const updateProductQuery = "UPDATE products SET prod_name = $1, prod_desc = $2, price = $3, stock = $4, category = ARRAY [$5, $6, $7], color = $8 WHERE id = $9";
const deleteProductsQuery = "DELETE FROM products WHERE id = $1";

module.exports = { getProductsQuery, getProductById , postProductsQuery, deleteProductsQuery, updateProductQuery };
