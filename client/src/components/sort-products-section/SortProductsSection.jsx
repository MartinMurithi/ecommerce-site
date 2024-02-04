import React from "react";
import Sort from "../sort-products/Sort";
import CategoryDropDown from "../categories-dropdown/CategoryDropDown";
import "./SortProductsSection.css";
function SortProductsSection() {
  return (
    <div className="sortProductsSection">
      <CategoryDropDown /><Sort />
      
    </div>
  );
}

export default SortProductsSection;
