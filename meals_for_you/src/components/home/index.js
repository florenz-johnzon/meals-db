import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Meal App</h1>
      <div className="items-container">
        <Link to="/categories" className="home-button">
          Menu
        </Link>
        <Link to="/favourites" className="home-button">Favourite Meal</Link>
        <Link className="home-button">Random Meal</Link>
      </div>
    </div>
  );
};

export default Home;
