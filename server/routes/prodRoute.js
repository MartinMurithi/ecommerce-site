const { Router } = require("express");
const {
  getProducts,
  postProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} = require("../controllers/productsController");

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/add-product", postProducts);
router.delete("/delete-product/:id", deleteProduct);
router.put("/update-product/:id", updateProduct);

module.exports = router;
