import React, { useState } from "react";
import { useGetCartProductsQuery } from "../api/ApiSlice";
import Navbar from "../components/navbar/Navbar";
import CartSection from "../components/cart-section/CartSection";
import "../components/cart-section/CartSection.css";

function Cart() {
  const [totalAmount, setTotalAmt] = useState(0);
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetCartProductsQuery();

   const updateTotal = (subtotal) => {
     setTotalAmt((prevTotal) => prevTotal + subtotal);
   };

   console.log(totalAmount);

  return (
    <>
      <Navbar />
      <h2 className="cartTitle">My Cart</h2>

      {isError && <p>{error.message}</p>}
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        products?.length !== 0 &&
        products?.products?.map((product) => {
          return (
            <div key={product.pid} className="cart">
              <CartSection prodCart={product} updateTotal={updateTotal} />
            </div>
          );
        })
      )}
      <div className="totalAmt">
        <p className="totalAmtText">Total Amount</p>
        <p className="totalAmount">{totalAmount}</p>
      </div>
    </>
  );
}

export default Cart;
