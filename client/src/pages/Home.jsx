import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import LoadMore from "../components/load-more-btn/LoadMore";
import Footer from "../components/footer/Footer";
import ProductList from "../components/ProductList";
import WhyUs from "../components/why-us/WhyUs";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyUs />
      <ProductList />
      <LoadMore />
      <Footer />
    </>
  );
}

export default Home;
