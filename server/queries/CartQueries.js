const getCartProductsQuery =
  "SELECT * FROM products INNER JOIN cart ON products.pid = cart.pid";

const addToCartQuery = " INSERT INTO cart (pid, qty) VALUES ( $1, $2 )";

module.exports = {
  getCartProductsQuery,
  addToCartQuery
};
