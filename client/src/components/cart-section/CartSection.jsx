import React, { useState, useEffect } from "react";
import { removeFromCart } from "../../api/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  useRemoveFromCartMutation,
  useUpdateCartQtyMutation,
} from "../../api/ApiSlice";
import "./CartSection.css";
import "../product-page/Product.css";

function CartSection({ prodCart }) {
  const [qtyValue, setQtyValue] = useState(prodCart?.qty);
  const [subTotalAmt, setSubTotalAmt] = useState(0);
  const [deleteCartProductHandler, { isLoading }] = useRemoveFromCartMutation();
  const [qtyControlHandler] = useUpdateCartQtyMutation();
  const dispatch = useDispatch();

  const price = parseFloat(prodCart?.price.replace(/[^\d.-]/g, ""));

  // Func to increase or decrease qty
  const updateCartQty = async (newQtyValue) => {
    try {
      await qtyControlHandler({
        id: prodCart?.pid,
        qty: newQtyValue,
        price: price,
        subTotal: subTotalAmt
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
      updateCartQty(newQtyValue);
    }
  };

  // Func to delete prod from cart
  const deleteProd = async () => {
    try {
      await deleteCartProductHandler(prodCart?.pid).unwrap();
      dispatch(removeFromCart(prodCart?.pid));
      toast.success("Product removed from cart");
    } catch (err) {
      console.error(err.message);
      toast.error("An error occurred when removing the product from cart");
    }
  };

  useEffect(() => {
    if (qtyValue < 1) {
      setQtyValue(1);
    }
    // Calculating subtotal when qtyValue or prodCart changes
    const subTotal = price * prodCart?.qty;
    setSubTotalAmt(subTotal);
  }, [qtyValue, prodCart]);

  return (
    <>
      <div className="cartSection">
        <div className="cartContainer">
          <div className="cartItem">
            <div className="productImage">
              <img src={prodCart?.images[0]} alt="Product" />
            </div>
            <div className="productDetails">
              <p className="productName">{prodCart?.prod_name}</p>
              <div className="quantityControl">
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
          <hr />

          <div className="subtotal">
            <p className="subtotalText">Subtotal:</p>
            <p className="subtotalAmount">£{subTotalAmt.toFixed(2)}</p>
          </div>

          <div className="deleteBtnSection">
            <button className="deleteBtn" onClick={deleteProd}>
              {isLoading ? "Removing From Cart" : "Remove From Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSection;
// <button className="checkoutBtn">Proceed to Checkout</button>;
