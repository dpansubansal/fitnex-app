import React from "react";
import aboutImg from "../../assets/about-img.png";
import "./About.css";
import Tag from "../Common/Tag";

const About = () => {
  return (
    <div className="about container" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className="about-text">
        <Tag title="About Us" />
        <div className="about-text-heading common-heading ">Who We Are?</div>
        <div className="about-text-desc common-paragraph">
          At Spanidea Systems, we are passionate about integrating cutting-edge
          AI and ML technologies to revolutionize the fitness industry. Our team
          of experts has extensive experience in AI research and application,
          dedicated to bringing innovative fitness solutions to your fingertips.
        </div>
        <button className="btn common-paragraph">Know More</button>
      </div>
    </div>
  );
};

export default About;
