import React from "react";
import "./sidebar.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>
          <AiOutlineCloseCircle className="close-icon" />
        </button>
        <div className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/categories">Menu</Link>
          <Link to="/randomMeal">Random Meal</Link>
          <Link to="/favourites">Favourites</Link>
        </div>
        <div className="about-us">
          <Link to="/aboutUs">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
