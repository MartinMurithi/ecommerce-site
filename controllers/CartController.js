const Cart = require("../models/Cart");
const Product = require("../models/product");

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


const addToCart = async (req, res) => {
  let { id, qty, price, subTotal } = req.body;
  subTotal = qty * price;

  try {
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product cannot be added to cart because it does not exist" });
    }

    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // If the product is already in the cart, update its quantity and subtotal
      const existingProductIndex = cart.products.findIndex(item => item.product.toString() === id);
      
      if (existingProductIndex > -1) {
        // Update the existing product in the cart
        cart.products[existingProductIndex].qty += qty;
        cart.products[existingProductIndex].subTotal = cart.products[existingProductIndex].qty * price;
      } else {
        // Add a new product to the cart
        cart.products.push({ product: id, qty, price, subTotal });
      }

      await cart.save();

      return res.status(201).json({
        message: "Product added to cart",
        cart: cart, // Return the updated cart
      });
    } else {
      const newCart = new Cart({
        user: req.user._id,
        products: [{ product: id, qty, price, subTotal }],
      });

      await newCart.save();

      return res.status(201).json({
        message: "Product added to cart",
        cart: newCart,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
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
