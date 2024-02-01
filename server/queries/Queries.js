const getProductsQuery = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE pId = $1";

const postProductQuery =
  "INSERT INTO products (prod_name, prod_desc, price, stock, category, images, brand) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const updateProductQuery =
  "UPDATE products SET prod_name = $1, prod_desc = $3, price = $4, stock = $5, category = $6, images = $7, brand = $2 WHERE id = $8";

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
