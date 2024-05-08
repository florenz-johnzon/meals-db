import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const REACT_APP_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

console.log(REACT_APP_BASE_URL);

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavouriteMeals =
      JSON.parse(localStorage.getItem("FavouriteMeals")) || [];
    setFavourites(storedFavouriteMeals);
  }, []);

  useEffect(() => {
    localStorage.setItem("FavouriteMeals", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (meal) => {
    setFavourites((prevFavourites) => [...prevFavourites, meal]);
  };
  const removeFavourite = (mealId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((fav) => fav.idMeal !== mealId)
    );
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${REACT_APP_BASE_URL}/categories.php`);
      setCategories(response.data.categories);
      console.log(response.data.categories, "RV");
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const fetchMealsByCategoryName = async (term) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BASE_URL}/filter.php?c=${term}`
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const fetchRandomMeals = async () => {
    try {
      const response = await axios.get(`${REACT_APP_BASE_URL}/random.php`);
      setRandomMeals(response.data.meals);
    } catch (error) {
      console.log("Error fetching random meals", error);
      return [];
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <AppContext.Provider
      value={{
        categories,
        fetchCategories,
        fetchMealsByCategoryName,
        meals,
        favourites,
        addFavourite,
        removeFavourite,
        randomMeals,
        fetchRandomMeals
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
