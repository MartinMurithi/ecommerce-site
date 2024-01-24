import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Categories from "../components/home-categories/Categories";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
    </>
  );
}

export default Home;
