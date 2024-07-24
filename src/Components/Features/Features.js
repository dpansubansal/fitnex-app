import React from "react";
import "./Features.css";
import Carousel from "../Common/Carousel";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import Tag from "../Common/Tag";

const Features = () => {
  const items = [
    {
      imgSrc: feature1,
      title: "Variety of Exercises & Yoga Poses",
      description:
        "Select from a wide range of workouts tailored to your needs.",
    },
    {
      imgSrc: feature2,
      title: "Variety of Yoga Poses",
      description:
        "Deepen your practice with precision-guided flows and a wide range of Asanas.",
    },
    {
      imgSrc: feature3,
      title: "Variety of Exercises",
      description:
        "Select from a wide range of workouts from Cardio & HIIT to Strength and Mobility Trainings.",
    },
    {
      imgSrc: feature4,
      title: "AI-Powered Asanas",
      description:
        "Get real-time feedback and hands-free commands to perfect your form.",
    },
  ];
  return (
    <div className="features" id="features">
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
