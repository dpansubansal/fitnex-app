import React from "react";
import downloadAppBg from "../../assets/download-app-bg.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import footerLogo from "../../assets/footer-logo.png";
import "./Footer.css";
import { Link } from "react-scroll";
import Tag from "../Common/Tag";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="download-app">
        <div className="download-app-Bg">
          <img src={downloadAppBg} alt="downloadAppBg"></img>
          <div className="download-app-text">
            <Tag title={"download app"} />
            <div className="download-app-heading common-heading">
              Realtime voice instructions while doing your workouts.
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
        </div>
      </div>
      <div className="footer-text container">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" className="footerLogo" />
        </div>
        <div className="horizontal-line"></div>
        <div className="ul footer-nav-links common-paragraph">
          <div className="li">
            <Link to="hero" smooth={true} offset={-125} delay={500}>
              Home
            </Link>
          </div>
          <div className="li">
            <Link to="about" smooth={true} offset={-125}>
              About
            </Link>
          </div>
          <div className="li">
            <Link to="features" smooth={true} offset={-125}>
              Features
            </Link>
          </div>
          <div className="li">
            <Link to="technology" smooth={true} offset={-125}>
              Technology
            </Link>
          </div>
          <div className="li">
            <Link to="testimonials" smooth={true} offset={-125}>
              Testimonials
            </Link>
          </div>
        </div>
        <div className="footer-end">
          <div className="common-paragraph2">
            © 2024 Fitnex | All rights reserved.
          </div>
          <div className="footer-end-links common-paragraph4">
            <div className="li">Privacy Policy</div>
            <div className="li">Terms of Service</div>
            <div className="li">Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
