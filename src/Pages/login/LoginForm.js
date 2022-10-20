import React, { useState } from "react";
import "./LoginFormStyle.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const LoginForm = ({ updateView }) => {
  const [userName, setUserName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handlePassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const reDirect = (token) => {
    let jwtBody = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );

    if (jwtBody.permission_level === 5) {
      // window.location.replace("http://localhost:3000/mainpageuser5");
    }
    if (jwtBody.permission_level === 4) {
      // window.location.replace("http://localhost:3000/map");
    }
    if (
      jwtBody.permission_level === 3 ||
      jwtBody.permission_level === 2 ||
      jwtBody.permission_level === 1
    ) {
      // window.location.replace("http://localhost:3000/map");
    }
    sessionStorage.setItem("permissionLevel", jwtBody.permission_level);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLoggedId = {
      user_id: userName,
      company: companyId,
      password: password,
    };
    setIsLoading(true);
    fetch("http://localhost:8000/http_middleware/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoggedId),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setIsLoading(false);
        sessionStorage.setItem("store-token", data.message.token);
        sessionStorage.setItem("company", companyId);
        sessionStorage.setItem("user_id", userName);
        getAuthorizedSites();
      });
  };

  const getAuthorizedSites = () => {
    var token = sessionStorage.getItem("store-token");
    var companyObjId = sessionStorage.getItem("company");
    var userNameId = sessionStorage.getItem("user_id");
    fetch(`http://localhost:8000/http_middleware/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
        "site-id": "none",
      },
      body: JSON.stringify({
        type: "query",
        action: "eagluserByObjId",
        identity_info: `${companyObjId + "_" + userNameId}`,
        input: [],
        output: [
          "objId",
          {
            name: "siteSet",
            fields: ["name", "objId"],
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "authorizedSites",
          data.message.data.eagluserByObjId.siteSet
        );
        sessionStorage.setItem(
          "authorizedSites",
          data.message.data.eagluserByObjId.siteSet
        );
        reDirect(token);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-content">
          <div className="loginInputs">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="loginInputs">
            <label htmlFor="companyId">CompanyId:</label>
            <input
              id="company"
              type="text"
              placeholder="CompanyId"
              required
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />
          </div>

          <div className="loginInputs">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type={type}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={handlePassword} className="login-hide-show">
              <Icon icon={icon} size={23}></Icon>
            </span>
          </div>
          {!isLoading && (
            <div className="loginInputs">
              <button type="submit">Login</button>
            </div>
          )}
          {isLoading && (
            <div className="loginInputs">
              <button type="submit" disabled>
                Logging in..
              </button>
            </div>
          )}
          <div className="forgotPassword">
            <a
              onClick={() => {
                updateView("forgotPass");
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <a href="/">Back to home page</a>
      </form>
    </div>
  );
};

export default LoginForm;
