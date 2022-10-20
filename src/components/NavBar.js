import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
