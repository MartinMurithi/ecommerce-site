import React from "react";
import {
  MdSearch,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
} from "react-icons/md";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navSection">
        <h2 className="logo">Amazonne</h2>

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
          <div className="navAccount">
            <MdOutlineAccountCircle className="accountIcon" />
            <p className="accountText">SignIn/Register</p>
          </div>

          <div className="navCart">
            <MdOutlineShoppingCart className="cartIcon" />
            <p className="cartText">Cart</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
