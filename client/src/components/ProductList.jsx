import React, { useState } from "react";
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} from "../api/ApiSlice";
import "./product-card/ProductCard.css";
import ProductCard from "./product-card/ProductCard";
import "./sort-products-section/SortProductsSection.css";
import CategoryDropDown from "./categories-dropdown/CategoryDropDown";
import Sort from "./sort-products/Sort";
import { useEffect } from "react";

function ProductList() {
  // These are the options displayed in the dropdown
  const prodCategories = [
    { value: "", text: "--Select a product category--" },
    { value: "All", text: "All" },
    { value: "Accessories", text: "Accessories" },
    { value: "Babies", text: "Babies" },
    { value: "Beauty", text: "Beauty" },
    { value: "Decorations", text: "Decorations" },
    { value: "Electronics", text: "Electronics" },
    { value: "Fashion", text: "Fashion" },
    { value: "Food", text: "Food" },
    { value: "Furniture", text: "Furniture" },
    { value: "Watches", text: "Watches" },
    { value: "Computers", text: "Computer" },
  ];

  const { isLoading, isError, error, data: products } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const filterProducts = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const newProducts = products.filter(
        (product) =>
          product?.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(newProducts);
    }
  };

  const sortProducts = (sortOption) => {
    if (sortOption === "default") {
      setFilteredProducts(products);
    } else {
      const sortedProducts = products.sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    }
  };

  return (
    <>
      <div className="sortProductsSection">
        <CategoryDropDown
          categoryList={prodCategories}
          handleValue={(e) => filterProducts(e.target.value)}
        />
        <Sort handleValue={(e)=> sortProducts(e.target.value)} />
      </div>
      <div className="errorSection">{isError && <p>{error.message}</p>}</div>

      <div className="loadingSpinner">{isLoading && <p>Loading....</p>}</div>
      <div className="productList">
        {filteredProducts?.length !== 0 ? (
          filteredProducts?.map((product) => {
            return (
              <div key={product.pId}>
                <ProductCard product={product} />
              </div>
            );
          })
        ) : (
          <p>No products available at the moment</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
