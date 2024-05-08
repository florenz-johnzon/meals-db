import React from "react";
import { FaBars } from "react-icons/fa";
import "./header.scss";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <h1 className="header-title">Meals For You</h1>
    </header>
  );
};

export default Header;
