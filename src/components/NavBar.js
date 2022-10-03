import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;
