import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Spending from "./components/Spending";

const App = () => {
  return (
    <div className="app">
      <Balance />
      <Spending />
    </div>
  );
};

export default App;
