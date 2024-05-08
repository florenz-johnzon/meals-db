import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Categories from "./components/categories";
import CategoryList from "./components/categoryList";
import Favourites from "./components/favourites";
import RandomMeal from "./components/randomMeal";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Router>
        <Header toggleSidebar={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route path="/category/:categoryName" element={<CategoryList />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/randomMeal" element={<RandomMeal/>} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
