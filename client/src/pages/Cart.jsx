import React, { useEffect, useState } from "react";
import { useGetCartProductsQuery } from "../api/ApiSlice";
import Navbar from "../components/navbar/Navbar";
import CartSection from "../components/cart-section/CartSection";
import "../components/cart-section/CartSection.css";

function Cart() {
  const [totalAmt, setTotalAmt] = useState();

  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetCartProductsQuery();

  // func to add total amount

  const calcTotalAmt = ()=>{
    
  };

  // Everytime the component is mounted, the total amt should be ...
  useEffect(() =>{
    calcTotalAmt();
  }, [totalAmt]);

  return (
    <>
      <Navbar />
      <h2 className="cartTitle">My Cart</h2>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        products?.length !== 0 &&
        products?.products?.map((product) => {
          return (
            <div key={product.pid} className="cart">
              <CartSection prodCart={product} />
            </div>
          );
        })
      )}
      <div className="totalAmt">
        <p className="totalAmtText">Total Amount</p>
        <p className="totalAmount">59000</p>
      </div>
    </>
  );
}

export default Cart;
