import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  <div className="oppt__features-container__feature">
    <div className="oppt__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="oppt__features-container_features-text">
      <p>{text}</p>
    </div>
  </div>;
};

export default Feature;
