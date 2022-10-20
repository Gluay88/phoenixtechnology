import React from "react";
import PhoenixLogo from "../../assets/phoenix-logo.svg";
import "./HomeStyle.css";
import NavBar from "../../components/NavBar";
const Home = () => {
  const yearCurrent = new Date().getFullYear();
  return (
    <>
      <NavBar />
      <div className="home-container">
        <img src={PhoenixLogo} alt="Phoenix Logo" />
        <h4>
          <span>Phoenix</span> Technology Inc.
        </h4>
        <br />
        <p>Copyright &copy; {yearCurrent} - Gluay S. Wang</p>
      </div>
    </>
  );
};

export default Home;
