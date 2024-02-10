import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Navbar from "../navbar/Navbar";
import {
  useGetProductByIdQuery,
  useAddToCartMutation,
} from "../../api/ApiSlice";
import "./Product.css";
import { useParams } from "react-router";

function Product() {
  const [qtyValue, setQtyValue] = useState(1);
  const { id } = useParams();
  console.log(typeof(id));
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useGetProductByIdQuery(id);
  const [ addToCartHandler ] = useAddToCartMutation();

  const images = product?.images?.map((image) => (
    <img src={image} alt="Product" width="60px" height="60px" />
  ));

  // Increament cart value
  const increaseCartVal = () => {
    setQtyValue((qty) => qty + 1);
  };

  // Decreament cart value
  const decreamentCartVal = () => {
    setQtyValue((qty) => qty - 1);
  };

  useEffect(() => {
    if (qtyValue < 1) {
      setQtyValue(1);
    }
  }, [qtyValue]);

  const cartProductProps = async () => {
    // An obj to store the cart product props
    const cartObj = {
      id: parseInt(id),
      qty: qtyValue,
    };
    console.log(cartObj);
    await addToCartHandler(cartObj);
  };

  // The function to add the product to cart
  const addToCart = async (e) => {
    e.preventDefault();
    await cartProductProps();
  };

  return (
    <>
      <Navbar />
      <div className="productDetailsParent">
        {/* Loading spinner */}
        {isLoading ? <p>Loading...</p> : null}
        {isError ? <p>{error.message}</p> : null}

        {/* Product Images */}
        <div className="prodImgParent">
          <div className="mainImg">
            <img
              src={product?.images?.[0]}
              alt="Product"
              width="100%"
              height="auto"
              className="prodImg"
            />
          </div>
          <div className="moreImages">
            <div className="imgCard">{images}</div>
          </div>
        </div>
        {/* Product Info */}
        <section className="prodDetails">
          <h1 className="prodName">{product?.prod_name}</h1>
          <p className="prodBrand">
            <span className="bold">Brand : </span> {product?.brand}
          </p>
          <p className="category">
            <span className="bold">Category :</span> {product?.category}
          </p>

          <p className="prodColor">
            <span className="bold">Stock : </span>
            {product?.stock}
          </p>
          <p className="prodPrice">Price : {product?.price}</p>
          <p className="prodDescription">{product?.prod_desc}</p>
          {/* Add to cart section */}
          <div className="addToCartSection">
            <div className="quantity">
              <button className="quantityBtn" onClick={decreamentCartVal}>
                -
              </button>
              <span className="prodCount">{qtyValue}</span>
              <button className="quantityBtn" onClick={increaseCartVal}>
                +
              </button>
            </div>
            <button type="submit" onClick={addToCart} className="addToCartBtn">
              <MdOutlineShoppingCart /> Add to Cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;
