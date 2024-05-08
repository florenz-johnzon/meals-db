import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { FaHeart } from "react-icons/fa";
import "./categoryList.scss";
import Loader from "../loader";

const CategoryList = () => {
  const { categoryName } = useParams();
  const {
    meals,
    fetchMealsByCategoryName,
    favourites,
    addFavourite,
    removeFavourite,
  } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        await fetchMealsByCategoryName(categoryName);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [categoryName, fetchMealsByCategoryName,favourites]);

  const isFavourite = (meal) => {
    return favourites?.some((fav) => fav.idMeal === meal.idMeal);
  };

  const toggleFavourite = (meal) => {
    if (isFavourite(meal)) {
      removeFavourite(meal.idMeal);
    } else {
      addFavourite(meal);
    }
  };

  return (
    <div className="category-list-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Please Find Your Choice of {categoryName} Meals</h1>
          <div className="meal-list">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="meal-item">
                <div className="meal-info">
                  <p className="meal-name">{meal.strMeal}</p>
                  <div
                    className={`favourite-icon ${
                      isFavourite(meal) ? "active" : ""
                    }`}
                    onClick={() => toggleFavourite(meal)}
                  >
                    <FaHeart />
                  </div>
                </div>
                <div className="meal-image-container">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="meal-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryList;
