const getCartProductsQuery =
  "SELECT * FROM products INNER JOIN cart ON products.pid = cart.pid";

const getCartProductById = "SELECT * FROM cart WHERE pId = $1";

const addToCartQuery =
  " INSERT INTO cart (pid, qty, product_price, sub_total) VALUES ( $1, $2, $3, $4 )";

// const updateCartProductQuery = "UPDATE cart SET qty = $1, product_price = $2, sub_total = $3 WHERE pId = $4";
const updateCartProductQuery =
  "UPDATE cart SET qty = $2, product_price = $3, sub_total = $4 WHERE pId = $1";

const deleteProdCartQuery = "DELETE FROM cart WHERE pId = $1";

module.exports = {
  getCartProductsQuery,
  getCartProductById,
  addToCartQuery,
  updateCartProductQuery,
  deleteProdCartQuery,
};
