const getProductsQuery = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE pId = $1";

const postProductQuery =
  "INSERT INTO products (prod_name, prod_desc, price, stock, category, images) VALUES ($1, $2, $3, $4, $5, $6)";

const updateProductQuery =
  "UPDATE products SET prod_name = $1, prod_desc = $2, price = $3, stock = $4, category = $5, images = $6 WHERE id = $7";

const deleteProductQuery = "DELETE FROM products WHERE pId = $1";
const deleteAllProductsQuery = "DELETE FROM products";

module.exports = {
  getProductsQuery,
  getProductById,
  postProductQuery,
  deleteProductQuery,
  updateProductQuery,
  deleteAllProductsQuery,
};