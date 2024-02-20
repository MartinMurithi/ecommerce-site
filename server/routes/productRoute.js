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

const prodRouter = Router();

prodRouter.get("/athena/api/v1/products", getProducts);
prodRouter.get("/athena/api/v1/products/:id", getProductById);
prodRouter.post(
  "/athena/api/v1/add-product",
  upload.array("images", 5),
  multerErrHandler,
  postProducts
);
prodRouter.delete("/athena/api/v1/delete-product/:id", deleteProduct);
prodRouter.delete("/athena/api/v1/delete-all-products", deleteAllProducts);
prodRouter.put(
  "/athena/api/v1/update-product/:id",
  upload.array("images", 5),
  multerErrHandler,
  updateProduct
);

module.exports = prodRouter;
