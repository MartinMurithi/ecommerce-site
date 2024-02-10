const getCartProductsQuery =
  "SELECT * FROM products INNER JOIN cart ON products.pid = cart.pid";

const getCartProductById =
  "SELECT products.pid FROM products INNER JOIN cart ON products.pid = cart.pid";

const addToCartQuery = " INSERT INTO cart (pid, qty) VALUES ( $1, $2 )";

const deleteProdCartQuery =
  "DELETE FROM cart WHERE pId = $1";

module.exports = {
  getCartProductsQuery,
  getCartProductById,
  addToCartQuery,
  deleteProdCartQuery,
};
