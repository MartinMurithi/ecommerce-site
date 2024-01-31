import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Navbar from "../navbar/Navbar";
import "./Product.css";

function Product() {
  return (
    <>
      <Navbar />
      <div className="productDetailsParent">
        {/* Product Images */}
        <div className="prodImgParent">
          <div className="mainImg">
            <img
              src="/assets/sports-category.jpg"
              alt=""
              width="100%"
              height="auto"
              className="prodImg"
            />
          </div>
          <div className="moreImages">
            <div className="imgCard">
              <img src="/assets/computers-category.jpeg" alt="" />
              <img src="/assets/computers-category.jpeg" alt="" />
              <img src="/assets/computers-category.jpeg" alt="" />
              <img src="/assets/computers-category.jpeg" alt="" />
              <img src="/assets/computers-category.jpeg" alt="" />
            </div>
          </div>
        </div>
        {/* Product Info */}
        <section className="prodDetails">
          <h1 className="prodName">
            Consoles Wireless Pc Gaming Gamepad Gaming Controller No Latency Usb
            Joystick
          </h1>
          <p className="prodBrand">
            <span className="bold">Brand : </span> Sony
          </p>
          <p className="category">
            <span className="bold">Category :</span> Electronics
          </p>
          <p className="prodColor">
            <span className="bold">Color : </span>
            Black
          </p>
          <p className="prodPrice">Price : £1200</p>
          <p className="prodDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum odio vitae tortor congue, ut elementum enim varius.
            Integer nec nunc ac nisi vestibulum suscipit.
          </p>
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
