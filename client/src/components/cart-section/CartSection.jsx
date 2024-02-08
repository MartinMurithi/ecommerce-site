import React from "react";
import { Link } from "react-router-dom";
import "./CartSection.css";
import "../product-page/Product.css";

function CartSection({ prodCart }) {
  // Remove currency symbol (£) and comma from the price string, then convert it to a number
  const price = parseFloat(prodCart?.price.replace(/[^\d.-]/g, ""));
  const subTotalAmt = price * prodCart?.qty;

  return (
    <div className="cartSection">
      <div className="cartContainer">
        <Link to={`/products/${prodCart?.pid}`} className="cartCardLink">
          <div className="cartItem">
            <div className="productImage">
              <img src={prodCart?.images[0]} alt="Product" />
            </div>
            <div className="productDetails">
              <p className="productName">{prodCart?.prod_name}</p>
              <div className="quantityControl">
                <p className="productName">Quantity : </p>
                <span className="quantity">{prodCart?.qty} Items</span>
              </div>
              <p className="productPrice">Price : {prodCart?.price}</p>
            </div>
          </div>
          <hr />

          <div className="subtotal">
            <p className="subtotalText">Subtotal:</p>
            <p className="subtotalAmount">£{subTotalAmt.toLocaleString()}</p>
          </div>
          <div className="deleteBtnSection">
            <button className="deleteBtn">Delete</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CartSection;
// <button className="checkoutBtn">Proceed to Checkout</button>;
