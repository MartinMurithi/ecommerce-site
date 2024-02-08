const getCartProducts =
  "SELECT * FROM products INNER JOIN cart ON products.pid = cart.pid";

module.exports = {
    getCartProducts
};
