import React, { useState } from "react";
import "./Chart.css";

const Chart = ({ day, amount, height, color }) => {
  const [showPrice, setShowPrice] = useState(false);

  const priceHandler = () => {
    setShowPrice(!showPrice);
  };

  return (
    <div className="chart">
      <div
        onClick={priceHandler}
        style={{ height: `${height}px`, backgroundColor: color }}
        className="chart-bar"
      >
        {showPrice && <p className="chart-amount">${amount}</p>}
      </div>
      <p className="chart-month">{day}</p>
    </div>
  );
};

export default Chart;
