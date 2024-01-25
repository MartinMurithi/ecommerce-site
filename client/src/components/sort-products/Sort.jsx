import React from "react";
import "./Sort.css";
function Sort() {
  return (
      <div className="sortSection">
        <select name="sort" id="sortProducts" className="sortProducts">
          <option value="all" className="sortOption">
            Sort By: Default
          </option>
          <option value="accessories" className="sortOption">
            Sort By: Price Low to High
          </option>
          <option value="babies" className="sortOption">
            Sort By: Price High to Low
          </option>
          <option value="beauty" className="sortOption">
            Sort By: Popularity
          </option>
          <option value="decoration" className="sortOption">
            Sort By: Latest
          </option>
        </select>
    </div>
  );
}

export default Sort;
