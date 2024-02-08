const { Router } = require("express");
const { getProductsFromCart, addToCart } = require("../controllers/CartController");
const cartRouter = Router();

cartRouter.get("/cart", getProductsFromCart);
cartRouter.post("/addToCart", addToCart);

module.exports = cartRouter;

