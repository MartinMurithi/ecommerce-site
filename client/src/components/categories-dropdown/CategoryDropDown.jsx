import React from "react";
import "./CategoryDropDown.css";
function CategoryDropDown() {
  return (
    <div className="dropDownCategories">
      <select name="categories" id="categories" className="categories">
        <option value="all" className="categoryOption">
          All Categories
        </option>
        <option value="accessories" className="categoryOption">
          Accessories
        </option>
        <option value="babies" className="categoryOption">
          Babies
        </option>
        <option value="beauty" className="categoryOption">
          Beauty
        </option>
        <option value="decoration" className="categoryOption">
          Decoration
        </option>
        <option value="electronics" className="categoryOption">
          Electronics
        </option>
        <option value="fashion" className="categoryOption">
          Fashion
        </option>
        <option value="food" className="categoryOption">
          Food
        </option>
        <option value="furniture" className="categoryOption">
          Furniture
        </option>
        <option value="watches" className="categoryOption">
          Watches
        </option>
        <option value="computer" className="categoryOption">
          Computer
        </option>
      </select>
    </div>
  );
}

export default CategoryDropDown;
