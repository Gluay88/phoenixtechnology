import React from "react";
import Form from "../components/Form";

const Home = () => {
  const getData = (data) => {
    console.log("data from Home.js", data);
  };
  return (
    <>
      <h4>Homepage</h4>
      <Form onSubmit={getData} />
    </>
  );
};

export default Home;
