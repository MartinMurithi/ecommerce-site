import React, { useState } from "react";
import "./CategoryDropDown.css";
function CategoryDropDown() {
  
  const prodCategories = [
    { value: "", text: "--Select a product category--" },
    { value: "Accessories", text: "Accessories" },
    { value: "Babies", text: "Babies" },
    { value: "Beauty", text: "Beauty" },
    { value: "Decorations", text: "Decorations" },
    { value: "Electronics", text: "Electronics" },
    { value: "Fashion", text: "Fashion" },
    { value: "Food", text: "Food" },
    { value: "Furniture", text: "Furniture" },
    { value: "Watches", text: "Furniture" },
    { value: "Computers", text: "Computer" },
  ];

  const [prodCategory, setProdCategory] = useState("");

  const handleValue = (event) => {
    const selectedCategory = event.target.value;
    setProdCategory(selectedCategory);
  };
  console.log(prodCategory);
  return (
    <div className="dropDownCategories">
      <select
        name="categories"
        onChange={handleValue}
        id="categories"
        className="categories"
      >
        {prodCategories?.map((category) => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropDown;
