import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartSection.css";
import "../product-page/Product.css";
import {
  useRemoveFromCartMutation,
  useUpdateCartQtyMutation,
} from "../../api/ApiSlice";

function CartSection({ prodCart }) {
  const [qtyValue, setQtyValue] = useState(prodCart?.qty);
  const [deleteCartProductHandler, { isLoading }] = useRemoveFromCartMutation();
  const [qtyControlHandler] = useUpdateCartQtyMutation();

  // Func to increase or decrease qty
  const updateCartQty = async (newQtyValue) => {
    try {
      await qtyControlHandler({
        id: prodCart?.pid,
        qty: newQtyValue,
      }).unwrap();
      setQtyValue(newQtyValue);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Increase cart value
  const increaseCartVal = () => {
    const newQtyValue = qtyValue + 1;
    updateCartQty(newQtyValue);
  };

  // Decrease cart value
  const decreaseCartVal = () => {
    if (qtyValue > 1) {
      const newQtyValue = qtyValue - 1;
      updateCartQty(newQtyValue)
    }
  };

  useEffect(() => {
    if (qtyValue < 1) {
      setQtyValue(1);
    }
  }, [qtyValue]);

  // Func to delete prod from cart
  const deleteProd = async () => {
    try {
      await deleteCartProductHandler(prodCart?.pid).unwrap();
    } catch (err) {
      console.error(err.message);
    }
  };

  // Remove currency symbol (£) and comma from the price string, then convert it to a number
  const price = parseFloat(prodCart?.price.replace(/[^\d.-]/g, ""));
  const subTotalAmt = price * prodCart?.qty;

  return (
    <div className="cartSection">
      <div className="cartContainer">
        {/* <Link to={`/products/${prodCart?.pid}`} className="cartCardLink"> */}
        <div className="cartItem">
          <div className="productImage">
            <img src={prodCart?.images[0]} alt="Product" />
          </div>
          <div className="productDetails">
            <p className="productName">{prodCart?.prod_name}</p>
            <div className="quantityControl">
              {/* <p className="productName">Quantity : </p> */}
              <div className="quantity">
                <button className="quantityBtn" onClick={decreaseCartVal}>
                  -
                </button>
                <span className="quantity">{prodCart?.qty}</span>
                {/* <span className="prodCount">{qtyValue}</span> */}
                <button className="quantityBtn" onClick={increaseCartVal}>
                  +
                </button>
              </div>
            </div>
            <p className="productPrice">Price Per Item : {prodCart?.price}</p>
          </div>
        </div>
        {/* </Link> */}
        <hr />

        <div className="subtotal">
          <p className="subtotalText">Subtotal:</p>
          <p className="subtotalAmount">£{subTotalAmt.toLocaleString()}</p>
        </div>
        <div className="deleteBtnSection">
          <button className="deleteBtn" onClick={deleteProd}>
            {isLoading ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
// <button className="checkoutBtn">Proceed to Checkout</button>;
