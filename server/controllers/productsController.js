const pool = require("../config/DB");
const queries = require("../queries/Queries");
const cloudinary = require("../config/Cloudinary");

const getProducts = (req, res) => {
  pool.query(queries.getProductsQuery, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(results.rows);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params);
  console.log(id);
  pool.query(queries.getProductById, [id], (error, results) => {
    // Check if product exists
    if (!results?.rows?.length) {
      return res.status(404).json({ Message: "Product does not exist!" });
    } else if (error) {
      return res.status(500).json({ Error: error.message });
    } else {
      return res.status(200).json(results.rows);
    }
  });
};

const postProducts = async (req, res) => {
  const { prod_name, prod_desc, price, stock, category, brand } = req.body;
  const images = req.files;

  try {
    // Check if images are present in the request
    if (!images || images.length === 0) {
      return res.status(500).json({ Error: "Images are required" });
    }

    // Upload images to Cloudinary
    const uploadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image.path, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result.secure_url);
            console.log(result.public_id);
            console.log(result);
          }
        });
      });
    });

    const imageURLS = await Promise.all(uploadPromises);

    pool.query(
      queries.postProductQuery,
      [prod_name, prod_desc, price, stock, category, imageURLS, brand],
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json({
          message: "Product added successfully",
          product: {
            name: prod_name,
            description: prod_desc,
            price: price,
            stock: stock,
            category: category,
            images: imageURLS,
            brand: brand,
          },
        });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { prod_name, prod_desc, price, stock, category, brand } = req.body;
  const id = parseInt(req.params.id);
  const images = req.files;

  // Check if images exist
  if (!images || images.length === 0) {
    return res.status(500).json({ Error: "Images are required" });
  }

  // Check if product exists before updating
  pool.query(queries.getProductById, [id], async (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }
    if (!results.rows.length) {
      return res.status(404).json({ Message: "Product does not exist" });
    }

    try {
      // Upload images to Cloudinary
      const uploadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload(image.path, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          });
        });
      });

      const imageURLS = await Promise.all(uploadPromises);

      pool.query(
        queries.updateProductQuery,
        [prod_name, prod_desc, price, stock, category, imageURLS, brand, id],
        (error, results) => {
          if (error) return res.status(500).json({ error: error.message });
          res.status(201).json({
            message: "Product updated successfully",
            product: {
              name: prod_name,
              description: prod_desc,
              price: price,
              stock: stock,
              category: category,
              images: imageURLS,
              brand: brand,
            },
          });
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params);

  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }
    // check if product exists
    if (!results.rows.length) {
      return res
        .status(404)
        .json({ Message: "Product does not exist and cannot be deleted!" });
    }

    // Delete images from cloudinary
    const cloudinaryImages = results.rows[0].images;
    console.log(cloudinaryImages);
    try {
      cloudinaryImages.forEach((image) => {
        const public_id = image.public_id;
        console.log(public_id);
      });
    } catch (error) {
      console.error(error.message);
    }

    // If product exists delete
    pool.query(queries.deleteProductQuery, [id], (error, results) => {
      if (error) {
        return res.status(500).json({ Error: error.message });
      }

      res.status(200).json({
        Message: `Product with id ${id} has been deleted successfully!`,
      });
    });
  });
};

const deleteAllProducts = (req, res) => {
  pool.query(queries.deleteAllProductsQuery, (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }
    res.status(200).json({ Message: "All products deleted successfully." });
  });
};

module.exports = {
  getProducts,
  getProductById,
  postProducts,
  deleteProduct,
  updateProduct,
  deleteAllProducts,
};
