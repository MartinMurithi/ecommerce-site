const { Router } = require("express");
const {
  getProductsFromCart,
  addToCart,
  deleteProdCart,
  updateProdCart,
} = require("../controllers/CartController");
const protectRoute = require("../middleware/Auth");
const cartRouter = Router();

cartRouter.get("/cart", protectRoute, getProductsFromCart);
cartRouter.post("/add-to-cart", protectRoute, addToCart);
cartRouter.put("/update-cart-product/:id", updateProdCart);
cartRouter.delete("/delete-from-cart/:id", deleteProdCart);

module.exports = cartRouter;
