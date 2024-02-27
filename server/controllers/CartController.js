const pool = require("../config/DB");
const queries = require("../queries/CartQueries");

const getProductsFromCart = (req, res) => {
  pool.query(queries.getCartProductsQuery, (error, results) => {
    if (error) {
      console.log(error.message);
      return res.status(500).json({ Error: error.message });
    }

    return res.status(200).json({
      count: results.rows.length,
      products: results.rows.sort(), //The sort method mutates the array and returns the reference to the array.
    });
  });
};

const getCartProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCartProductById, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }
    return res.status(200).json(results.rows);
  });
};

// When a prod is added to the cart, the id is extracted from the params which will act as the foreign key in the cart table.

const addToCart = (req, res) => {
  let { id, qty, price, subTotal } = req.body;
  subTotal = qty * price;
  pool.query(
    queries.addToCartQuery,
    [parseInt(id), qty, price, subTotal],
    (error, results) => {
      if (error) {
        return res.status(500).json({ Error: error.message });
      }

      return res.status(201).json({
        Message: "Product added to cart",
        Product: results.rows[0],
      });
    }
  );
};

const deleteProdCart = (req, res) => {
  const id = parseInt(req.params.id);

  // Check if the product exists in the cart before deleting
  // pool.query(queries.getCartProductById, [id], (error, results) => {
  //   if (error) {
  //     return res.status(500).json({ Error: error.message });
  //   } else if (!results.rows.length) {
  //     return res
  //       .status(200)
  //       .json({ Message: `Product with ${id} does not exist` });
  //   }

  //   // Delete product from cart if it exists
  // });
  pool.query(queries.deleteProdCartQuery, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ Error: error.message });
    }

    return res.status(200).json({ Message: "Product removed from cart" });
  });
};

const updateProdCart = (req, res) => {
  let { qty, price, subTotal } = req.body;
  const id = parseInt(req.params.id);
  subTotal = qty * price;
  console.log(id, qty, price, subTotal);
  // Check if the prod exists
  pool.query(queries.getCartProductById, [id], (error, results) => {
    if (error) {
      return res.status(200).json({ Message: error.message });
    } else if (!results.rows.length) {
      return res
        .status(404)
        .json({ Message: `Product with id ${id} does not exist` });
    }

    // If prod exists in the cart, update it
    pool.query(
      queries.updateCartProductQuery,
      [id, qty, price, subTotal],
      (error, results) => {
        if (error) {
          return res.status(500).json({ Error: error.message });
        }

        return res.status(201).json({
          Message: "Cart product Updated successfully",
          product: {
            id: id,
            qty: qty,
            price: price,
            subTotal: subTotal,
          },
        });
      }
    );
  });
};

module.exports = {
  getProductsFromCart,
  addToCart,
  updateProdCart,
  deleteProdCart,
};
