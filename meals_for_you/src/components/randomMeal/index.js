import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../context";
import { FaYoutube } from "react-icons/fa";
import Loader from "../loader";
import "./randomMeal.scss";
const RandomMeal = () => {
  const { randomMeals, fetchRandomMeals } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandom = async () => {
      if (randomMeals.length === 0) {
        try {
          setLoading(true);
          await fetchRandomMeals();
          setLoading(false);
        } catch (error) {
          console.error("Error fetching meals:", error);
          setLoading(false);
        }
      }
    };

    fetchRandom();
  }, [fetchRandomMeals, randomMeals.length]);

  return (
    <div className="random-meal-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Let's try a random meal</h1>
          {randomMeals && randomMeals.length > 0 ? (
            randomMeals.map((randomMeal) => (
              <div key={randomMeal.idMeal} className="meal-details">
                <h2>{randomMeal.strMeal}</h2>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                <p>Wanna cook it at home? Please watch our recipe</p>
                <a
                  href={randomMeal.strYoutube}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="youtube-icon" />
                </a>
              </div>
            ))
          ) : (
            <p>No random meals available</p>
          )}
          <div className="button-container">
            <button className="generate-button" onClick={fetchRandomMeals}>
              Generate Random Meal
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomMeal;
