import React from "react";
import "./Sort.css";
function Sort({handleValue}) {

  return (
      <div className="sortSection">
        <select name="sort" id="sortProducts" className="sortProducts">
          <option value="default" className="sortOption">
            Sort By: Default
          </option>
          <option value="price" className="sortOption">
            Sort By: Price Low to High
          </option>
          <option value="price" className="sortOption">
            Sort By: Price High to Low
          </option>
          {/* Will add a date timestamp for when a product was added */}
          <option value="decoration" className="sortOption">
            Sort By: Latest
          </option>
        </select>
    </div>
  );
}

export default Sort;
