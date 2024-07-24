import "./Hero.css";
import heroImg from "../../assets/hero-img.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";

import React from "react";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-section">
        <div className="hero-text">
          <div className="common-main-heading">
            Transform Your Fitness Journey with AI-Powered Guidance
          </div>
          <div className="hero-text-desc common-paragraph">
            Our AI-powered app offers expertly crafted exercises and yoga poses,
            guiding you with hands-free commands and real-time feedback. Perfect
            for home, gym, or travel, our app caters to all fitness levels,
            helping you achieve your goals with personalized progress tracking
            and improvement tips.
          </div>
          <div className="download-app-links">
            <img src={playStore} alt="playStore"></img>
            <img src={appStore} alt="appStore"></img>
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
