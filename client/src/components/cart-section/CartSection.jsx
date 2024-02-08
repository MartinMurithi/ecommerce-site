import React, { useState } from "react";
import "./CartSection.css";
import "../product-page/Product.css";

function CartSection() {
    const [cartValue, setCartValue] = useState(1);

    const addCartValue = ()=>{
        setCartValue((value)=> value + 1);
    };


    const subtractCartValue = () => {
      setCartValue((value) => value - 1);
      if (cartValue <= 1){
        setCartValue(1);
      }
    };

  return (
    <div className="cartSection">
      <h2 className="cartTitle">My Cart</h2>
      <div className="cartContainer">
        <div className="cartItem">
          <div className="productImage">
            <img src="./assets/babies-category.jpeg" alt="Product" />
          </div>
          <div className="productDetails">
            <p className="productName">Product Name</p>
            <div className="quantityControl">
              <button className="quantityBtn" onClick={subtractCartValue}>-</button>
              <span className="quantity">{cartValue}</span>
              <button className="quantityBtn" onClick={addCartValue}>+</button>
            </div>
            <p className="productPrice">$12,432</p>
          </div>
        </div>
        <hr />

        <div className="subtotal">
          <p className="subtotalText">Subtotal:</p>
          <p className="subtotalAmount">$12,432</p>
        </div>
        <div className="deleteBtnSection">
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
// <button className="checkoutBtn">Proceed to Checkout</button>;
