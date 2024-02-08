import React from "react";
import { useGetCartProductsQuery } from "../api/ApiSlice";
import Navbar from "../components/navbar/Navbar";
import CartSection from "../components/cart-section/CartSection";
import '../components/cart-section/CartSection.css';

function Cart() {
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useGetCartProductsQuery();
  console.log(products);
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
            <div key={product.pid}>
              <CartSection prodCart={product} />
            </div>
          );
        })
      )}
    </>
  );
}

export default Cart;
