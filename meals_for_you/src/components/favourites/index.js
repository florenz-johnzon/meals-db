import React, { useContext, useState,useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "./favourites.scss";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import Loader from "../loader";

const FavoriteMeals = () => {
  const { favourites, removeFavourite } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        await favourites;
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [favourites]);
  return (
    <div className="favourite-meals-container">
{isLoading ? (
        <Loader />
      ) : (
        <>      <h1>Favorite Meals</h1>
      {favourites.length === 0 ? (
        <div className="favourite-no-selection">
          <p>
            Have you not saved any favourite meal collection yet? Let's explore
            it now !!!
          </p>
          <Link to="/categories" className="button-link">
            Yes
          </Link>
          <Link to="/" className="button-link">
            No
          </Link>
        </div>
      ) : (
        <ul className="favourite-meals-list">
          {favourites.map((meal) => (
            <li key={meal.idMeal} className="favourite-meal-item">
              <div className="meal-info">
                <p className="meal-name">{meal?.strMeal}</p>
                <div
                  className="favourite-icon"
                  onClick={() => removeFavourite(meal.idMeal)}
                >
                  <FaHeart className="heart-icon active" />
                </div>
              </div>
              <div className="meal-image-container">
                <img
                  src={meal?.strMealThumb}
                  alt={meal.name}
                  className="meal-image"
                />
              </div>
            </li>
          ))}
        </ul>
      )} </>)}
    </div>
  );
};

export default FavoriteMeals;
