import React from "react";
import "./Features.css";
import Carousel from "./Carousel";

const Features = () => {
  return (
    <div className="features">
      <div className="features-heading">All your asanas with correct poses</div>
      <Carousel />
    </div>
  );
};

export default Features;
