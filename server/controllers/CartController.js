const pool = require("../config/DB");
const queries = require("../queries/CartQueries");

const getProductsFromCart = (req, res) => {
  pool.query(queries.getCartProductsQuery, (error, results) => {
    if (error) {
      console.log(error.message);
      return res.status(500).json({ Error: error.message });
    }

    console.log(results.rows);
    return res
      .status(200)
      .json({ count: results.rows.length, products: results.rows });
  });
};

// When a prod is added to the cart, the id is extracted from the params which will act as the foreign key in the cart table.

const addToCart = (req, res) => {
  const { id, qty } = req.body;
  pool.query(queries.addToCartQuery, [parseInt(id), qty], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }

    return res.status(201).json({
      Message: "Product added to cart",
      Product: results.rows[0],
    });
  });
};

const deleteProdCart = (req, res) => {
  const id = parseInt(req.params.id);
  // Check if the product exists in the cart before deleting
  pool.query(queries.getCartProductById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    } else if (!results.rows.length) {
      return res
        .status(200)
        .json({ Message: `Product with ${id} does not exist` });
    }

    // Delete product from cart if it exists
    pool.query(queries.deleteProdCartQuery, [id], (error, results) => {
      if (error) {
        return res.status(500).json({ Error: error.message });
      }

      return res.status(200).json({ Message: "Product removed from cart" });
    });
  });
};

module.exports = { getProductsFromCart, addToCart, deleteProdCart };
