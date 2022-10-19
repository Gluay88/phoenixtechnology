import React from "react";
import NavMap from "./NavMap";
import "./ActionNav.css";

const ActiveNav = () => {
  return (
    <>
      <div className="nav-map-container">
        <div className="nav-map">
          <button className="emergency-button">EMERGENCY</button>
          <button className="system-normal-button">SYSTEM NORMAL</button>
        </div>
        <NavMap />
      </div>
    </>
  );
};

export default ActiveNav;
