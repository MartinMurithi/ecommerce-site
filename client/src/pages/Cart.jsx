import React, { useEffect, useState } from "react";
import { useGetCartProductsQuery } from "../api/ApiSlice";
import Navbar from "../components/navbar/Navbar";
import CartSection from "../components/cart-section/CartSection";
import "../components/cart-section/CartSection.css";

function Cart() {
 const [totalAmt, setTotalAmt] = useState(0);
 const [subtotals, setSubtotals] = useState({});
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetCartProductsQuery();

  // Function to update the total amount
  const updateTotal = (productId, subtotal) => {
    setSubtotals((prevSubtotals) => ({
      ...prevSubtotals,
      [productId]: subtotal,
    }));
  };

  // Update the total amount whenever the subtotals change
  useEffect(() => {
    const total = Object.values(subtotals).reduce((acc, curr) => acc + curr, 0);
    setTotalAmt(total);
  }, [subtotals]);
  
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
              <CartSection prodCart={product} updateTotal={updateTotal}/>
              {console.log(product)}
            </div>
          );
        })
      )}
      <div className="totalAmt">
        <p className="totalAmtText">Total Amount</p>
        <p className="totalAmount">{totalAmt}</p>
      </div>
    </>
  );
}

export default Cart;
