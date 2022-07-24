import React from "react";
import Chart from "./Chart";
import "./Spending.css";
import json from "../data.json";

const Spending = () => {
  const chartHandler = json.map((data) => (
    <Chart
      key={data.id}
      day={data.day}
      amount={data.amount}
      height={data.amount * 3}
      color={data.color}
    />
  ));
  return (
    <div className="spending">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <h1 className="spending-main_text">Spending - Last 7 days</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {chartHandler}
      </div>
      <hr />
      <div className="total">
        <div className="left">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>

        <div className="right">
          <h2>+2.4%</h2>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
