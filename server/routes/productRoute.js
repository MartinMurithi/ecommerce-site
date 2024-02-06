const { Router } = require("express");
const upload = require("../config/Multer");
const multerErrHandler = require("../middleware/MulterErrHandler");
const {
  getProducts,
  postProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  deleteAllProducts,
} = require("../controllers/productsController");

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post(
  "/add-product",
  upload.array("images", 5),
  multerErrHandler,
  postProducts
);
router.delete("/delete-product/:id", deleteProduct);
router.delete("/delete-all-products", deleteAllProducts);
router.put(
  "/update-product/:id",
  upload.array("images", 5),
  multerErrHandler,
  updateProduct
);

module.exports = router;
