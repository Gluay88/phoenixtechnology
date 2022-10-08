import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
    </div>
  );
};

export default NavBar;
