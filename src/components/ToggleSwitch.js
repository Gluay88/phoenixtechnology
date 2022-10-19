import React, { useState, createContext } from "react";
import ReactSwitch from "react-switch";
import "./ToggleSwitch.css";

export const ThemeContext = createContext(null);

const ToggleSwitch = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="toggle-mode-container">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>Hello!</div>
      </ThemeContext.Provider>
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </div>
  );
};

export default ToggleSwitch;
