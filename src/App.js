import React from "react";
import "./App.css";
import Die from "./Die";

function App() {
  return (
    <div className="App">
      <Die face="five" />
      <Die face="four" />
      <Die face="six" />
    </div>
  );
}

export default App;
