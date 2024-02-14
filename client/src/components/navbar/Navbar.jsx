import React from "react";
import {
  MdSearch,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart,
  MdMenu,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          Petersheppard
        </NavLink>

        {/* Menu Icon for Small Screens */}
        <div className="block lg:hidden">
          <MdMenu className="text-gray-800 text-3xl" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-200 rounded-md">
            <input
              type="search"
              placeholder="Search for shoes..."
              className="w-48 px-4 py-2 focus:outline-none"
              id="searchInput"
            />
            <MdSearch className="text-gray-600 mx-2" />
          </div>

          {/* Language Selector (Assuming it's in the same position as the cart and user account) */}
          <div>
            <select className="border border-gray-200 rounded px-3 py-2">
              <option value="en">English</option>
              <option value="fr">Français</option>
              {/* Add more language options as needed */}
            </select>
          </div>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="text-gray-800 flex items-center space-x-1"
          >
            <MdOutlineShoppingCart className="text-xl" />
            <span>Cart</span>
          </NavLink>

          {/* User Account */}
          <NavLink
            to="/login"
            className="text-gray-800 flex items-center space-x-1"
          >
            <MdOutlineAccountCircle className="text-xl" />
            <span>My Account</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   return (
//     <nav>
//       <div className="navSection">
//         <NavLink to="/" className="logo">
//           Amazonne
//         </NavLink>

//         <div className="searchBarParent">
//           <div className="categoriesDropdown"></div>
//           <div className="searchInputSection">
//             <input
//               type="search"
//               placeholder="Search products..."
//               className="searchInput"
//               id="searchInput"
//             />
//             <MdSearch className="searchIcon" />
//           </div>
//         </div>

//         <div className="navRightSide">
//           <div className="langDropdown">
//             <img
//               src="/assets/kenya.png"
//               alt="Kenyan Flag"
//               width="30px"
//               height="30px"
//             />
//             <span className="lang">EN</span>
//           </div>

//           {/* Shopping Cart */}
//           <NavLink to="/cart" className="navCart cartText">
//             <MdOutlineShoppingCart className="cartIcon" /> Cart
//           </NavLink>

//           {/* User account */}
//           <NavLink to="/login" className="navAccount accountText">
//             <MdOutlineAccountCircle className="accountIcon" />
//             {/* When user clicks this, it takes him/her to a login page */}
//             My Account
//             {/* <NavLink to="/register" className="accountText">
//               Register */}
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }
