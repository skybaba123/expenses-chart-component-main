import React from "react";
import logoImage from "../images/logo.svg";
import "./Balance.css";

const Balance = () => {
  return (
    <div className="balance">
      <div>
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <img alt="logo" src={logoImage} />
    </div>
  );
};

export default Balance;
