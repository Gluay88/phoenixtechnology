import React from "react";
import PhoenixPic from "../assets/phoenix-logo.svg";
import "./PhoenixLogo.css";

const PhoenixLogo = () => {
  return (
    <div className="phoenixPhoto">
      <a href="/">
        <img src={PhoenixPic} alt="Phoenix Logo" />
      </a>
    </div>
  );
};

export default PhoenixLogo;
