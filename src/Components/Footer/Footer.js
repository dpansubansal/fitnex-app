import React from "react";
import downloadAppBg from "../../assets/download-app-bg.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import footerLogo from "../../assets/footer-logo.png";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="download-app">
        <div className="download-app-Bg">
          <img src={downloadAppBg} alt="downloadAppBg"></img>
          <div className="download-app-text">
            <div className="download-app-heading common-heading">
              Realtime voice instructions while doing your workouts.
            </div>
            <div className="download-app-links">
              <img src={playStore} alt="playStore"></img>
              <img src={appStore} alt="appStore"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" className="footerLogo" />
        </div>
        <div className="horizontal-line"></div>
        <div className="ul footer-nav-links common-paragraph">
          <div className="li">
            <Link to="hero" spy={true} smooth={true} offset={-125} delay={500}>
              Home
            </Link>
          </div>
          <div className="li">
            <Link to="about" spy={true} smooth={true} offset={-125}>
              About
            </Link>
          </div>
          <div className="li">
            <Link to="features" spy={true} smooth={true} offset={-125}>
              Features
            </Link>
          </div>
          <div className="li">
            <Link to="technology" spy={true} smooth={true} offset={-125}>
              Technology
            </Link>
          </div>
          <div className="li">
            <Link to="testimonials" spy={true} smooth={true} offset={-125}>
              Testimonials
            </Link>
          </div>
        </div>
        <div className="footer-end">
          <div className="common-paragraph2">
            © 2024 Fitnex | All rights reserved.
          </div>
          <div className="footer-end-links common-paragraph4">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
