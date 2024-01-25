import React from "react";
import categories from "../../data/Categories";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories-section">
      {/* Category cards */}
      {categories?.map((category, index) => {
        return (
            <div className="category" key={index}>
              <img
                src={category.imgPath}
                alt={category.category}
                loading="lazy"
                width="130px"
                height="130px"
                className="categoryImg"
              />
              <p className="categoryName">{ category.category }</p>
            </div>
        );
      })}
    </div>
  );
}

export default Categories;
