import React from "react";
import "./Features.css";
import Carousel from "./Carousel";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";

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
      imgSrc: feature1,
      title: "Variety of Exercises",
      description:
        "Select from a wide range of workouts from Cardio & HIIT to Strength and Mobility Trainings.",
    },
    {
      imgSrc: feature2,
      title: "AI-Powered Asanas",
      description:
        "Get real-time feedback and voice commands to perfect your asanas.",
    },
  ];
  return (
    <div className="features">
      <div className="features-heading common-heading">
        All your asanas with correct poses
      </div>
      <Carousel>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="common-card-heading card-heading">{item.title}</div>
            <div className="common-paragraph2 card-desc">
              {item.description}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Features;
