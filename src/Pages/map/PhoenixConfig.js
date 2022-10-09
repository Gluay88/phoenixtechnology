import React from "react";
import "./PhoenixConfigStyle.css";

const PhoenixConfig = ({ updateView }) => {
  return (
    <div className="phoenix-config-container">
      <h2>PhoenixConfig Page</h2>
      <button onClick={() => updateView("mapbase")}>Back to mapbase</button>
    </div>
  );
};

export default PhoenixConfig;
