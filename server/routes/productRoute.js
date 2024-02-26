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
  queryProducts,
} = require("../controllers/productsController");

const prodRouter = Router();

prodRouter.get("/products", getProducts);
prodRouter.get("/products/:id", getProductById);
prodRouter.post(
  "/add-product",
  upload.array("images", 5),
  multerErrHandler,
  postProducts
);
prodRouter.delete("/delete-product/:id", deleteProduct);
prodRouter.delete("/delete-all-products", deleteAllProducts);
prodRouter.put(
  "/update-product/:id",
  upload.array("images", 5),
  multerErrHandler,
  updateProduct
);
prodRouter.get("/search", queryProducts);

module.exports = prodRouter;
