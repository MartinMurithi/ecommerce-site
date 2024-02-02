import React from "react";
import { useGetProductsQuery } from "../api/ApiSlice";
import "./product-card/ProductCard.css";
import ProductCard from "./product-card/ProductCard";

function ProductList() {
  const { isLoading, isError, error, data: products } = useGetProductsQuery();
  console.log(products);

  return (
    <>
      <div className="errorSection">{isError && <p>{error.message}</p>}</div>

      <div className="loadingSpinner">{isLoading && <p>Loading....</p>}</div>
      <div className="productList">
        {products?.length !== 0 ? (
          products?.map((product) => {
            return <ProductCard product={product} key={product.pId} />;
          })
        ) : (
          <p>No products available at the moment</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
