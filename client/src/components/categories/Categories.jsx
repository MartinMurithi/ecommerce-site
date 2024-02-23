import React from "react";
import "./Categories.css";

function Categories({ categoryList, handleValue }) {
  const categoriesSet = new Set();
  categoriesSet.add("All");
  if (categoryList?.length !== 0) {
    categoryList?.map((cat) => categoriesSet.add(cat));
  }

  const newCatList = Array.from(categoriesSet);

  const catBtn = newCatList?.map((category, index) => (
    <button
      key={index}
      onClick={() => handleValue(category)}
      className="catBtn"
    >
      {category}
    </button>
  ));

  return <div className="categories">{catBtn}</div>;
}

export default Categories;
