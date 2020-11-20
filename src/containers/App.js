import React from "react";
import "./App.css";
import ParticlesBG from "../components/ParticlesBG";
import Cal from "../components/Cal";
import Page from "./page";
import spiral from "./spiral.jpg";

function App() {
  return (
    <div className="wrapper">
      <ParticlesBG />
      <div className="App flex justify-center items-center">
        <div
          className="flex flex-column justify-between"
          style={{
            height: 800,
          }}
        >
          <Cal />
          <div className="bg-blue w-100 h-100">Filters</div>
        </div>
        <div
          style={{
            boxShadow: "20px 0 30px #00000055",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <img src={spiral} height="800px" alt="spiral" />
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
