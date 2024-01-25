import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Categories from "../components/home-categories/Categories";
import Sort from "../components/sort-products/Sort";
import ProductCard from "../components/product-card/ProductCard";
import LoadMore from "../components/load-more-btn/LoadMore";
import Subscription from "../components/subscription/Subscription";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Sort />
      <ProductCard />
      <LoadMore />
      <Subscription />
    </>
  );
}

export default Home;
