import React from "react";
import { FaLock, FaRegUser } from 'react-icons/fa6';
import './Account-Dropdown.css';

function AccountDropdown() {
  return (
    <div className="dropDownSection">
      {/* List of nav links and dropdwon for the language and currency selector*/}
      <div className="signIn">
        <FaLock />
        <span className="navSignIn">Sign In</span>
      </div>
      <div className="register">
        <FaRegUser />
        <span className="navRegister">My Account</span>
      </div>

      {/* Language Selector */}
      <select name="language" className="languageSelector">
        <option value="english">
          <img src="/assets/logo.jpg" alt="Logo" width="100%" height="auto" />
          <img src="/assets/usa-flag.png" alt="usa" />
          
        </option>
        <option value="swahili">
          <img src="/assets/kenyan-flag.png" alt="kenya" />
        </option>
        <option value="spanish">
          <img src="/assets-spanish-flag.jpeg" alt="spain" />
        </option>
        <option value="italy">
          <img src="/assets/italian-flag.jpeg" alt="italy" />
        </option>
        <option value="german">
          <img src="/assets/german-flag.png" alt="germany" />
        </option>
      </select>

      {/* Currency Selector */}
      <select name="currency" className="currencySelector">
        <option value="kes">KES</option>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
      </select>
    </div>
  );
}

export default AccountDropdown;
