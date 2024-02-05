import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Categories from "../components/home-categories/Categories";
import LoadMore from "../components/load-more-btn/LoadMore";
import Subscription from "../components/subscription/Subscription";
import Footer from "../components/footer/Footer";
import ProductList from "../components/ProductList";
import SortProductsSection from "../components/sort-products-section/SortProductsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      {/* <SortProductsSection /> */}
      <ProductList />
      <LoadMore />
      <Subscription />
      <Footer />
    </>
  );
}

export default Home;
