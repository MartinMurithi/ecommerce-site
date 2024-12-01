const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      subTotal: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
