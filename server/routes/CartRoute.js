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
cartRouter.put("/update-cart-product/:id", protectRoute, updateProdCart);
cartRouter.delete("/delete-from-cart/:id", protectRoute, deleteProdCart);

module.exports = cartRouter;
