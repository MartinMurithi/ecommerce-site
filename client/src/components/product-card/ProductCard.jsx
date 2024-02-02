import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  // N/B => Slice, returns a shallow copy of an arrow and does not affect the original array.

  return (
    <section className="productCard">
      <NavLink>
        <img
          src={product?.images?.[0]}
          alt="Product"
          width="280px"
          height="280px"
          className="prodImg"
        />
        <div className="cardDetails">
          <p className="cardCategory">{product?.category?.[0]}</p>
          <p className="cardTitle">{product.prod_name}</p>
          <h5 className="cardPrice">{product.price}</h5>
        </div>
      </NavLink>
    </section>
  );
}

export default ProductCard;
