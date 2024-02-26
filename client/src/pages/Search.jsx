import React, { useState } from "react";
import "./Search.css";
import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/product-card/ProductCard";
import { useGetProductsQuery, useQueryProductsQuery } from "../api/ApiSlice";

function Search() {
  const [query, setQuery] = useState("");
  const {data: productss} = useGetProductsQuery();
  const {
    isError,
    error,
    isSuccess,
    isLoading,
    data: products,
    refetch,
  } = useQueryProductsQuery(query, {enabled:false});

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Navbar />
      <div className="searchParent">
        <form className={`searchForm`} onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for products..."
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {isError && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {isSuccess && products?.length !== 0 ? (
          products?.products?.map((product) => (
            <ProductCard product={product} key={product.pid} />
          ))
        ) : (
          <div className="productList">
            {productss?.length !== 0 ? (
              productss?.map((product) => {
                return <ProductCard product={product} key={product.pId} />;
              })
            ) : (
              <p>No products available at the moment</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
