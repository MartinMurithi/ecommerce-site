import React, { useState } from "react";
import { useGetCartProductsQuery } from "../../api/ApiSlice";
import "./CartSection.css";
import "../product-page/Product.css";

function CartSection({prodCart}) {
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
      <div className="cartContainer">
        <div className="cartItem">
          <div className="productImage">
            <img src={prodCart?.images[0]} alt="Product" />
          </div>
          <div className="productDetails">
            <p className="productName">{prodCart?.prod_name}</p>
            <div className="quantityControl">
              <button className="quantityBtn" onClick={subtractCartValue}>-</button>
              <span className="quantity">{prodCart?.qty}</span>
              <button className="quantityBtn" onClick={addCartValue}>+</button>
            </div>
            <p className="productPrice">{prodCart?.price}</p>
          </div>
        </div>
        <hr />

        <div className="subtotal">
          <p className="subtotalText">Subtotal:</p>
          <p className="subtotalAmount">{prodCart?.price * prodCart?.qty}</p>
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
