import "./Hero.css";
import heroImgDesktop from "../../assets/hero-img-desktop.png";
import heroImgMobile from "../../assets/hero-img-mobile.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";

import React from "react";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-section container">
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
            <img
              src={playStore}
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=comyogaa.google.mlkit.vision.yogaa&pcampaignid=web_share",
                  "_blank"
                );
              }}
              alt="playStore"
            ></img>
            <img src={appStore} alt="appStore"></img>
          </div>
        </div>
        <div className="hero-img hero-img-desktop">
          <img
            className="hero-img-desktop"
            src={heroImgDesktop}
            alt="hero-img"
          />
        </div>
        <div className="hero-img hero-img-mobile">
          <img className="hero-img-mobile" src={heroImgMobile} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
