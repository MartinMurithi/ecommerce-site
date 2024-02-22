import React, { useState } from "react";
import { useGetProductsQuery } from "../api/ApiSlice";
import "./product-card/ProductCard.css";
import ProductCard from "./product-card/ProductCard";
import "./sort-products-section/SortProductsSection.css";
import Categories from "./categories/Categories";
import Sort from "./sort-products/Sort";
import { useEffect } from "react";

function ProductList() {
  const { isLoading, isError, error, data: products } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const prodCategoryList = products?.map((product) => product?.category);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const newProducts = products?.filter(
        (product) =>
          product?.category === category
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
        <Categories
          categoryList={prodCategoryList}
          handleValue={filterProducts}
        />
        {/* <Sort handleValue={(e) => sortProducts(e.target.value)} /> */}
      </div>
      <div className="errorSection">{isError && <p>{error.message}</p>}</div>

      <div className="loadingSpinner">{isLoading && <p>Loading....</p>}</div>
      <div className="productList">
        {filteredProducts?.length !== 0 ? (
          filteredProducts?.map((product) => {
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
