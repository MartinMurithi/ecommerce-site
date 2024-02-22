import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import "./Banner.css";
function Banner() {
  return (
    <div className="bannerSection">
      <div className="bannerInfo">
        <h3 className="bannerText1">New Fashion Collection</h3>
        <img
          src="/assets/slider-border.webp"
          alt="Slider Border"
          className="sliderBorder"
        />

        <p className="bannerText">
          Fashion: Where Style Meets Expression, and Confidence Becomes Couture!
        </p>

        <button className="actionBtn">Shop Now <MdArrowRightAlt className="bannerArrow" /></button>
      </div>
    </div>
  );
}

export default Banner;
