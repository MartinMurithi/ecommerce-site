import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  // N/B => Slice, returns a shallow copy of an arrow and does not affect the original array.
  const {pid : id} = product;
  
  return (
    <section className="productCard">
      <Link to={`/products/${id}`}>
        <img
          src={product?.images?.[3]}
          alt="Product"
          width="260px"
          height="260px"
          className="prodImg"
        />
        <div className="cardDetails">
          {/* <p className="cardCategory">{product?.category}</p> */}
          <p className="cardTitle">{product.prod_name}</p>
          <h5 className="cardPrice">{product.price}</h5>
        </div>
      </Link>
    </section>
  );
}

export default ProductCard;
