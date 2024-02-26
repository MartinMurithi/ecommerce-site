import React, { useState } from "react";
import "./Search.css";
import Navbar from "../components/navbar/Navbar";

function Search() {
  return (
    <>
      <Navbar />
      <div className="searchParent">
        <form className={`searchForm`}>
          <input
            type="search"
            placeholder="Search for products..."
            className="searchInput"
            //   value={query}
            //   onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </form>
      </div>
    </>
  );
}

export default Search;
