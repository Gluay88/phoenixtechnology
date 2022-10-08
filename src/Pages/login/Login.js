import React, { useState } from "react";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [show, setShow] = useState("login");
  const updateView = (view) => {
    if (view === "login") {
      setShow("login");
    } else {
      setShow("forgotPass");
    }
  };
  return (
    <>
      {show === "login" ? (
        <LoginForm updateView={updateView} />
      ) : (
        <ForgotPassword updateView={updateView} />
      )}
    </>
  );
};

export default Login;
