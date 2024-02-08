const { Router } = require("express");
const { getProductsFromCart } = require("../controllers/CartController");
const cartRouter = Router();

cartRouter.get("/cart", getProductsFromCart);

module.exports = cartRouter;

