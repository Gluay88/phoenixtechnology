import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Map from "./Pages/map/Map";
// import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
