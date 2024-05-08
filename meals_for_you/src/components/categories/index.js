import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import "./categories.scss";

const CategoriesComponent = () => {
  const { categories, fetchCategories } = useContext(AppContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="categories-container">
      <h1>Choose Your Cuisine</h1>
      <div className="categories-list-container">
        {categories?.map((category) => (
          <Link
            key={category.idCategory}
            to={`/category/${category.strCategory}`}
            className="category-item"
          >
            <div>
              <p className="category-name">{category.strCategory}</p>
              <img alt="category" src={category.strCategoryThumb} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
