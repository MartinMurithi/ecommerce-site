import React from "react";
import "./CategoryDropDown.css";

function CategoryDropDown({categoryList, handleValue}) {
  
  return (
    <div className="dropDownCategories">
      <select
        name="categories"
        onChange={handleValue}
        id="categories"
        className="categories"
      >
        {categoryList?.map((category) => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropDown;
