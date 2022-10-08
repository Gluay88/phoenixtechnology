import React from "react";
// import Form from "../../components/Form";
import PhoenixLogo from "../../assets/phoenix-logo.svg";
import "./HomeStyle.css";

const Home = () => {
  const yearCurrent = new Date().getFullYear();
  return (
    <div className="home-container">
      <img src={PhoenixLogo} alt="Phoenix Logo" />
      <h4>
        <span>Phoenix</span> Technology Inc.
      </h4>
      <br />
      <p>Copyright &copy; {yearCurrent} - Gluay S. Wang</p>
    </div>
  );
};

export default Home;
