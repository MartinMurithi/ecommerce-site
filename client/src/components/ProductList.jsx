import React, { useState } from "react";
import { useGetProductsQuery, useLazyGetProductsByCategoryQuery } from "../api/ApiSlice";
import "./product-card/ProductCard.css";
import ProductCard from "./product-card/ProductCard";
import "./sort-products-section/SortProductsSection.css";
import CategoryDropDown from "./categories-dropdown/CategoryDropDown";
import Sort from "./sort-products/Sort";

function ProductList() {
  const prodCategories = [
    { value: "", text: "--Select a product category--" },
    { value: "Accessories", text: "Accessories" },
    { value: "Babies", text: "Babies" },
    { value: "Beauty", text: "Beauty" },
    { value: "Decorations", text: "Decorations" },
    { value: "Electronics", text: "Electronics" },
    { value: "Fashion", text: "Fashion" },
    { value: "Food", text: "Food" },
    { value: "Furniture", text: "Furniture" },
    { value: "Watches", text: "Furniture" },
    { value: "Computers", text: "Computer" },
  ];

  const [prodCategory, setProdCategory] = useState("");

  const { isLoading, isError, error, data: products } = useGetProductsQuery();
  const { data:productts } = useLazyGetProductsByCategoryQuery(prodCategory);
  console.log(products);

  const handleValue = (event) => {
    const selectedCategory = event.target.value;
    setProdCategory(selectedCategory);
  };
  console.log(prodCategory);

  return (
    <>
      <div className="sortProductsSection">
        <CategoryDropDown categoryList={prodCategories} handleValue={handleValue} />
        <Sort />
      </div>
      {/* <SortProductsSection /> */}
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
