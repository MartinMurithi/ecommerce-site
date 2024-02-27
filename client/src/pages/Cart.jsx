import React from "react";
import { useGetCartProductsQuery } from "../api/ApiSlice";
import Navbar from "../components/navbar/Navbar";
import CartSection from "../components/cart-section/CartSection";
import "../components/cart-section/CartSection.css";

function Cart() {
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetCartProductsQuery();

  // const price = parseFloat(prodCart?.price.replace(/[^\d.-]/g, ""));

  const totalPrice = products?.products?.reduce(
    (accumulator, product) =>
      accumulator + parseFloat(product?.sub_total.replace(/[^\d.-]/g, "")),
    0
  );

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
              <CartSection prodCart={product} />
            </div>
          );
        })
      )}
      <div className="totalAmt">
        <p className="totalAmtText">Total Amount</p>
        <p className="totalAmount">£{totalPrice}</p>
      </div>
    </>
  );
}

export default Cart;
