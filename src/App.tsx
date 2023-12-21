import React from "react";
import "./App.css";
import FlavanoidsData from "./component/flavanoids/flavanoidsData";
import GammaCal from "./component/gamma/gammaCal";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content" >
      <Routes>
        <Route path="/" element={<FlavanoidsData />} />
        <Route path="/gamma" element={<GammaCal />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
