import React from "react";
import "./App.css";
import Game from "./game";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Krona One" }}>Conways Game of Life</h1>
      <Game />
    </div>
  );
}

export default App;
