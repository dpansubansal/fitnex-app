import React from "react";
import "./Features.css";
import Carousel from "../Common/Carousel";
import feature01 from "../../assets/Features/feature01.png";
import feature02 from "../../assets/Features/feature02.png";
import feature03 from "../../assets/Features/feature03.png";
import feature04 from "../../assets/Features/feature04.png";
import feature05 from "../../assets/Features/feature05.png";
import feature06 from "../../assets/Features/feature06.png";
import feature07 from "../../assets/Features/feature07.png";
import Tag from "../Common/Tag";

const Features = () => {
  const items = [
    {
      imgSrc: feature01,
      title: "Variety of Exercises & Yoga Poses",
      description:
        "Select from a wide range of workouts tailored to your needs.",
    },
    {
      imgSrc: feature02,
      title: "AI-Powered Assistance",
      description:
        "Get real-time feedback and hands-free commands to perfect your form.",
    },
    {
      imgSrc: feature03,
      title: "Variety of Yoga Poses",
      description:
        "Deepen your practice with precision-guided flows and wide range if Asanas.",
    },
    {
      imgSrc: feature04,
      title: "Personalized Progress Tracking",
      description:
        "Monitor your improvement and receive tips to enhance your performance.",
    },
    {
      imgSrc: feature05,
      title: "Variety of Exercises",
      description:
        "Select from a wide range of workouts from Cardio & HIIT to Strength and Mobility Trainings.",
    },
    {
      imgSrc: feature06,
      title: "User-Friendly Interface",
      description:
        "Easy navigation and seamless user experience.",
    },
    {
      imgSrc: feature07,
      title: "Voice Commands",
      description:
        "Complete your workouts without touching your device.",
    },
  ];
  return (
    <div className="features container" id="features">
      <div className="features-tag">
        <Tag title="features" />
      </div>
      <div className="features-heading common-heading">
        All your asanas with correct poses
      </div>
      <Carousel>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="common-card-heading features-card-heading">
              {item.title}
            </div>
            <div className="common-paragraph2 features-card-desc">
              {item.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Features;
