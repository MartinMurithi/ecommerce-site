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
          <div className="categoriesDropdown">
            <select name="categories" id="navCategories">
              <option value="all">All Categories</option>
              <option value="accessories">Accessories</option>
              <option value="babies">Babies</option>
              <option value="beauty">Beauty</option>
              <option value="decoration">Decoration</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
              <option value="furniture">Furniture</option>
              <option value="watches">Watches</option>
              <option value="computer">Computer</option>
            </select>
          </div>
          <hr />
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
          <div className="navCart">
            <MdOutlineShoppingCart className="cartIcon" />
            <NavLink to='/cart' className="cartText">Cart</NavLink>
          </div>
          {/* User account */}
          <div className="navAccount">
            <MdOutlineAccountCircle className="accountIcon" />
            {/* When user clicks this, it takes him/her to a login page */}
            <NavLink to="/login" className="accountText">
              My Account
            </NavLink>

            {/* <NavLink to="/register" className="accountText">
              Register
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
