import React from "react";
import "./ForgotPasswordStyle.css";

const ForgotPassword = ({ updateView }) => {
  return (
    <>
      <div className="forgot-password-container">
        <h2>Forgot Password Page</h2>
        <p>Redirect to admin..</p>
        <a
          onClick={() => {
            updateView("login");
          }}
        >
          <span>Back to login</span>
        </a>
      </div>
    </>
  );
};

export default ForgotPassword;
