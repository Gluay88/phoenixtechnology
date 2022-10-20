import React from "react";
import "./NavMain.css";
import SystemStatus from "./SystemStatus";
import PhoenixLogo from "./PhoenixLogo";
import ActionNav from "./ActionNav";
import DoorGroup from "./DoorGroup";
import ThemeProfileConfig from "./ThemeProfileConfig";

const NavMain = ({ updateView }) => {
  return (
    <>
      <div className="navMainContainer">
        <div className="navMain">
          <SystemStatus />
          <PhoenixLogo />
          <ActionNav />
          <DoorGroup />
          <ThemeProfileConfig updateView={updateView} />
        </div>
      </div>
    </>
  );
};

export default NavMain;
