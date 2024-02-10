const { Router } = require("express");
const { getProductsFromCart, addToCart, deleteProdCart } = require("../controllers/CartController");
const cartRouter = Router();

cartRouter.get("/cart", getProductsFromCart);
cartRouter.post("/add-to-cart", addToCart);
cartRouter.delete("/delete-from-cart/:id", deleteProdCart);

module.exports = cartRouter;

