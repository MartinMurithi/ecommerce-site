const { Router } = require("express");
const {
  getProductsFromCart,
  addToCart,
  deleteProdCart,
  updateProdCart,
} = require("../controllers/CartController");
const cartRouter = Router();

cartRouter.get("/cart", getProductsFromCart);
cartRouter.post("/add-to-cart", addToCart);
cartRouter.put("/update-cart-product/:id", updateProdCart);
cartRouter.delete("/delete-from-cart/:id", deleteProdCart);

module.exports = cartRouter;
