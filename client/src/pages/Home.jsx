import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Categories from "../components/home-categories/Categories";
import Sort from "../components/sort-products/Sort";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Sort />
    </>
  );
}

export default Home;
