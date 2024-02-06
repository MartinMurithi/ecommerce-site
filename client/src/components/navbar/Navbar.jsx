import React from "react";
import {
  MdSearch,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navSection">
        <NavLink to="/" className="logo">
          Amazonne
        </NavLink>

        <div className="searchBarParent">
          <div className="categoriesDropdown"></div>
          <div className="searchInputSection">
            <input
              type="search"
              placeholder="Search products..."
              className="searchInput"
              id="searchInput"
            />
            <MdSearch className="searchIcon" />
          </div>
        </div>

        <div className="navRightSide">
          <div className="langDropdown">
            <img
              src="/assets/kenya.png"
              alt="Kenyan Flag"
              width="30px"
              height="30px"
            />
            <span className="lang">EN</span>
          </div>

          {/* Shopping Cart */}
          <NavLink to="/cart" className="navCart cartText">
            <MdOutlineShoppingCart className="cartIcon" /> Cart
          </NavLink>

          {/* User account */}
          <NavLink to="/login" className="navAccount accountText">
            <MdOutlineAccountCircle className="accountIcon" />
            {/* When user clicks this, it takes him/her to a login page */}
            My Account
            {/* <NavLink to="/register" className="accountText">
              Register */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
