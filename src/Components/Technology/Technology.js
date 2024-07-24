import React from "react";
import technologyImg from "../../assets/technology.png";
import "./Technology.css";
import Tag from "../Common/Tag";

const Technology = () => {
  return (
    <div className="technology" id="technology">
      <div className="technology-img">
        <img src={technologyImg} alt="technology-img" />
      </div>
      <div className="technology-text">
        <Tag title="technology" />
        <div className="technology-text-heading common-heading">
          How It Works?
        </div>
        <div className="technology-text-desc common-paragraph">
          Our app leverages advanced AI and ML algorithms to provide
          personalized fitness guidance. With real-time pose detection, voice
          recognition, and intelligent feedback systems, we ensure an effective
          and enjoyable workout experience.
        </div>
      </div>
    </div>
  );
};

export default Technology;
