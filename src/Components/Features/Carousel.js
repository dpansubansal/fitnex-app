// CarouselComponent.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Features.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";

const items = [
  {
    imgSrc: feature1,
    title: "Variety of Exercises & Yoga Poses",
    description: "Select from a wide range of workouts tailored to your needs.",
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
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow">
      <svg
        className={`${className}`}
        style={{ ...style, width: "47", height: "47" }}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#433896"
        />
        <path
          d="M28.172 22.9999L22.808 17.6359L24.222 16.2219L32 23.9999L24.222 31.7779L22.808 30.3639L28.172 24.9999H16V22.9999H28.172Z"
          fill="#433896"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="custom-arrow custom-prev-arrow">
      <svg
        className={`${className}`}
        style={{ ...style, width: "47", height: "47" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        onClick={onClick}
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#433896"
        />
        <path
          d="M19.828 22.9999H32V24.9999H19.828L25.192 30.3639L23.778 31.7779L16 23.9999L23.778 16.2219L25.192 17.6359L19.828 22.9999Z"
          fill="#433896"
        />
      </svg>
    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imgSrc} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
