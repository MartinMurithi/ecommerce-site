import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      {/* col 1 */}
      <div className="col1">
        <h2 className="logo">Amazonne</h2>
        <p className="mobileInquiry">Got Questions? Call us on:</p>
        <a href="tel:+254768402382" className="mobile">
          +254790315098
        </a>
        <a href="mailto:wachira@gmail.com">amazonne@gmail.com</a>
        <p className="copyRight">&copy; Copyright 2024</p>
        <p className="rights">All Rights Reserved</p>
      </div>
      {/* col 2 */}
      <div className="col2">
        <h5 className="colTitle">COMPANY</h5>
        <a href="/" className="colLink">
          About Us
        </a>
        <a href="/" className="colLink">
          Team Member
        </a>
        <a href="/" className="colLink">
          Career
        </a>
        <a href="/" className="colLink">
          Contact Us
        </a>
        <a href="/" className="colLink">
          Affiliate
        </a>
        <a href="/" className="colLink">
          Order History
        </a>
      </div>

      {/* col 3 */}
      <div className="col3">
        <h5 className="colTitle">MY ACCOUNT</h5>
        <a href="/" className="colLink">
          Track My Order
        </a>
        <a href="/" className="colLink">
          Privacy Policy
        </a>
        <a href="/" className="colLink">
          View Cart
        </a>
        <a href="/" className="colLink">
          Sign In
        </a>
        <a href="/" className="colLink">
          Help
        </a>
        <a href="/" className="colLink">
          My Wishlist
        </a>
      </div>

      {/* col 4 */}
      <div className="col4">
        <h5 className="colTitle">CUSTOMER SERVICE</h5>
        <a href="/" className="colLink">
          Payment Methods
        </a>
        <a href="/" className="colLink">
          Money-back Guarantee
        </a>
        <a href="/" className="colLink">
          Product Returns
        </a>
        <a href="/" className="colLink">
          Support Center
        </a>
        <a href="/" className="colLink">
          Shipping
        </a>
        <a href="/" className="colLink">
          Terms and Conditions
        </a>
      </div>
    </footer>
  );
}

export default Footer;
