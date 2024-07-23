import React from "react";
import downloadAppBg from "../../assets/download-app-bg.png";
import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import footerLogo from "../../assets/footer-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
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
        <div className="ul">
          <div className="li">Home</div>
          <div className="li">About</div>
          <div className="li">Features</div>
          <div className="li">Technology</div>
          <div className="li">Testimonials</div>
        </div>
        <div className="footer-end">
            <div className="">© 2024 Fitnex  |   All rights reserved.</div>
            <div className="footer-end-links">
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
