import "./Hero.css";
import heroImg from "../../assets/hero-img.png";

import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-text-heading">
            Transform Your Fitness Journey with AI-Powered Guidance
          </div>
          <div className="hero-text-desc">
            Our AI-powered app offers expertly crafted exercises and yoga poses,
            guiding you with hands-free commands and real-time feedback. Perfect
            for home, gym, or travel, our app caters to all fitness levels,
            helping you achieve your goals with personalized progress tracking
            and improvement tips.
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
