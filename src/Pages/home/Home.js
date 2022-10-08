import React from "react";
// import Form from "../../components/Form";
import PhoenixLogo from "../../assets/phoenix-logo.svg";
import "./HomeStyle.css";

const Home = () => {
  // const getData = (data) => {
  //   console.log("data from Home.js", data);
  // };
  return (
    <div className="home-container">
      <p>Welcome to</p>
      <h4>Phoenix Technology</h4>
      <img src={PhoenixLogo} alt="Phoenix Logo" />

      {/* <Form onSubmit={getData} /> */}
    </div>
  );
};

export default Home;
