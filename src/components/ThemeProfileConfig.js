import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./ThemeProfileConfig.css";
import UserAccount from "./UserAccount";

const ThemeProfileConfig = () => {
  return (
    <div className="allRightItems">
      <div className="top-container">
        <ToggleSwitch />
        <UserAccount />
      </div>
      <div className="bottom-container">
        <button>
          <a href="/map">EAGL CONFIGURATION</a>
        </button>
      </div>
    </div>
  );
};

export default ThemeProfileConfig;
