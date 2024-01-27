const pool = require("../config/DB");
const queries = require("../queries/Queries");

const getProducts = (req, res) => {
  pool.query(queries.getProductsQuery, (error, results) => {
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(results.rows);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(queries.getProductById, [id], (error, results) => {
    // Check if product exists
    if (!results.rows.length) {
      return res.status(404).json({ Message: "Product does not exist!" });
    } else if (error) {
      return res.status(500).json({ Error: error.message });
    } else {
      return res.status(200).json(results?.rows);
    }
  });
};

const postProducts = (req, res) => {
  const { prod_name, prod_desc, price, stock, category, color } = req.body;
  const { category1, category2, category3 } = category;
  console.log(prod_name);
  pool.query(
    queries.postProductsQuery,
    [
      prod_name,
      prod_desc,
      price,
      stock,
      category1,
      category2,
      category3,
      color,
    ],
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
          color: color,
        },
      });
    }
  );
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
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

    // If product exists delete
    pool.query(queries.deleteProductsQuery, [id], (error, results) => {
      if (error) {
        return res.status(500).json({ Error: error.message });
      }
      res.status(200).json({
        Message: `Product with id ${id} has been deleted successfully!`,
      });
    });
  });
};

const updateProduct = (req, res) => {
  const { prod_name, prod_desc, price, stock, category, color } = req.body;
  const { category1, category2, category3 } = category;
  const id = parseInt(req.params.id);
  console.log(category1, category2);
  // Check if product exists before updating
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }
    if (!results.rows.length) {
      return res.status(404).json({ Message: "Product does not exist" });
    }

    // Update product if it exists
    pool.query(
      queries.updateProductQuery,
      [
        prod_name,
        prod_desc,
        price,
        stock,
        category1,
        category2,
        category3,
        color,
        id
      ],
      (error, results) => {
        if (error) {
          return res.status(500).json({ Error: error.message });
        }
        res.status(201).json({
          Message: "Product updated successfully",
          product: {
            name: prod_name,
            description: prod_desc,
            price: price,
            stock: stock,
            category: category,
            color: color,
          },
        });
      }
    );
  });
};

module.exports = {
  getProducts,
  getProductById,
  postProducts,
  deleteProduct,
  updateProduct
};
