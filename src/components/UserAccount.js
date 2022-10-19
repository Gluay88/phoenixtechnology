import React, { useState } from "react";
import ProfileIcon from "./ProfileIcon";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../assets/setting-icon.png";
import "./UserAccount.css";

var userNameId = sessionStorage.getItem("user_id");

// get the info from login*****

const UserAccount = () => {
  const navigate = useNavigate();
  const removeToken = () => {
    sessionStorage.removeItem("store-token");
    navigate("/");
  };

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <ProfileIcon />
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            <ProfileIcon />
            <p>Account</p>
          </h5>
          <button
            type="button"
            className="btn-close text-reset closeBtn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* hard coded */}
          <h2>{userNameId}</h2>
          <p>gluays@eagltechnology.com</p>

          <p>
            Personal settings
            <a href="#">
              <img src={SettingIcon} alt="setting-icon" />
            </a>
          </p>
          <button onClick={removeToken}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
