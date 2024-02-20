const { Router } = require("express");
const {
  getProductsFromCart,
  addToCart,
  deleteProdCart,
  updateProdCart,
} = require("../controllers/CartController");
const cartRouter = Router();

cartRouter.get("/athena/api/v1/cart", getProductsFromCart);
cartRouter.post("/athena/api/v1/add-to-cart", addToCart);
cartRouter.put("/athena/api/v1/update-cart-product/:id", updateProdCart);
cartRouter.delete("/athena/api/v1/delete-from-cart/:id", deleteProdCart);

module.exports = cartRouter;
