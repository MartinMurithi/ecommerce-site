import React, { useState } from "react";
import { MdOutlineSearch, MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AccountDropdown from "../account-modal/AccountDropdown";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prodIds = useSelector((state) => state.savedToCartReducer.prodIds);

  const handleOpenAccountModal = () => {
    setIsVisible((state) => !state);
  };

  return (
    <nav>
      <div className="navSection">
        {/* Logo */}
        <NavLink to="/" className="logo">
          Voguish
        </NavLink>

        {/* Nav links on large screens */}
        <div className="navLinks">
          <NavLink to="/" className="navItem">
            Home
          </NavLink>
          <NavLink to="/about" className="navItem">
            About Us
          </NavLink>
          <NavLink to="/contact" className="navItem">
            Contact
          </NavLink>
          <NavLink to="/blog" className="navItem">
            Blog
          </NavLink>
        </div>

        {/* Nav icons */}
        <div className="navIcons">
          <NavLink to="/search">
            <MdOutlineSearch className="navIcon" />
          </NavLink>

          <FaRegUser className="navIcon" onClick={handleOpenAccountModal} />
          <NavLink to="/cart">
            <MdOutlineShoppingCart className="navIcon" />
            <span className="cartCount">{prodIds?.length}</span>
          </NavLink>
        </div>
      </div>
      {isVisible ? <AccountDropdown /> : null}
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
