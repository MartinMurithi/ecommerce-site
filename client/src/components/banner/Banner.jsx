import React from "react";
import { NavLink } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import "./Banner.css";
function Banner() {
  return (
    <div className="bannerSection">
      <h4 className="bannerText1">Accessories Collection</h4>
      <h3 className="bannerText2">SMART WRIST WATCHES</h3>
      <div className="discoverMore">
        <button className="bannerLink">
          Discover More <MdArrowRightAlt className="bannerArrow" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
