import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Navbar from "../navbar/Navbar";
import { useGetProductByIdQuery } from "../../api/ApiSlice";
import "./Product.css";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useGetProductByIdQuery(id);


  const images = product?.images?.map((image) => (
    <img src={image} alt="Product" width="60px" height="60px" />
  ));

  console.log(product);

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
            <div className="imgCard">
              {images}
            </div>
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
          {/* <p className="prodColor">
            <span className="bold">Color : </span>
            {product?.color}
          </p> */}
          <p className="prodColor">
            <span className="bold">Stock : </span>
            {product?.stock}
          </p>
          <p className="prodPrice">Price : {product?.price}</p>
          <p className="prodDescription">{product?.prod_desc}</p>
          {/* Add to cart section */}
          <div className="addToCartSection">
            <div className="quantity">
              <button className="quantityBtn">-</button>
              <span className="prodCount">1</span>
              <button className="quantityBtn">+</button>
            </div>
            <button className="addToCartBtn">
              <MdOutlineShoppingCart /> Add to Cart
            </button>
          </div>
        </section>
      </div>
    </>
    // <>
    //   {" "}
    //   <Navbar />
    //   <div className="productDetailsParent">
    //     <div className="productSection">
    //       {/* Product Images */}
    //       <div className="prodImgParent">
    //         <div className="mainImg">
    //           {" "}
    //           <img
    //             src="/assets/computers-category.jpeg"
    //             alt=""
    //             className="prodImg"
    //           />
    //         </div>

    //         <div className="moreImages">
    //           <div className="imgCard">
    //             <img src="/assets/computers-category.jpeg" alt="" />
    //             <img src="/assets/computers-category.jpeg" alt="" />
    //             <img src="/assets/computers-category.jpeg" alt="" />
    //             <img src="/assets/computers-category.jpeg" alt="" />
    //             <img src="/assets/computers-category.jpeg" alt="" />
    //           </div>
    //         </div>
    //       </div>
    //       {/* Product Info */}
    //       <section className="prodDetails">
    //         <p className="prodName">
    //           Consoles Wireless Pc Gaming Gamepad Gaming Controller No Latency
    //           Usb Joystick
    //         </p>
    //         <p className="prodBrand">Sony</p>
    //         <p className="category">Electronics</p>
    //         <p className="prodColor">Black</p>
    //         <p className="prodPrice">£1200</p>
    //         {/* Add to cart section */}
    //         <div className="addToCartSection"></div>
    //       </section>
    //     </div>
    //   </div>
    // </>
  );
}

export default Product;
