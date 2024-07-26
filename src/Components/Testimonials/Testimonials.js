import React from "react";
import Carousel from "../Common/Carousel";
import "./Testimonials.css";
import rating5 from "../../assets/Testimonials/rating5.png";
import rating45 from "../../assets/Testimonials/rating45.png";
import author1 from "../../assets/Testimonials/author1.jpg";
import author2 from "../../assets/Testimonials/author2.jpg";
import author3 from "../../assets/Testimonials/author3.jpg";
import author4 from "../../assets/Testimonials/author4.jpg";
import author5 from "../../assets/Testimonials/author5.jpg";
import Tag from "../Common/Tag";

const Testimonials = () => {
  const authors = [
    {
      name: "Dipanshu Bansal",
      comment:
        "Practicing yoga on Fitnex has been a wonderful journey. It become my favorite part of the week!.",
      rating: rating5,
      pic: author1,
      postDate: "Jul 26, 2024",
    },
    {
      name: "Rohan Purohit",
      comment:
        "This app has transformed my fitness routine! The AI guidance is incredibly accurate and helpful.",
      rating: rating5,
      pic: author2,
      postDate: "Jul 15, 2024",
    },
    {
      name: "Sam Tavarez",
      comment:
        "I love the hands-free commands. It makes my yoga sessions so much more fluid and enjoyable.",
      rating: rating45,
      pic: author3,
      postDate: "June 21, 2024",
    },
    {
      name: "Hary Bottka",
      comment:
        "The progress tracking feature keeps me motivated. I can see my improvement after every session.",
      rating: rating5,
      pic: author4,
      postDate: "June 19, 2024",
    },
    {
      name: "Mellisa Torres",
      comment:
        "As a busy mom, finding time to exercise is tough. This app's quick and effective workouts fit perfectly into my schedule.",
      rating: rating45,
      pic: author5,
      postDate: "May 21  , 2024",
    },
  ];
  return (
    <div className="testimonials container" id="testimonials">
      <div className="testimonials-tag">
        <Tag title="testimonials" />
      </div>
      <div className="testimonials-heading common-heading">
        Straight From The User’s Heart
      </div>
      <Carousel>
        {authors.map((author, index) => (
          <div key={index} className="carousel-item carousel-testimonial-item">
            <div>
              <img src={author.rating} alt="authorRating" />
              <div className="common-paragraph testimonials-card-desc">
                {author.comment}
              </div>
            </div>
            <div className="testimonials-card-about">
              <div className="author-pic">
                <img src={author.pic} alt="authorPic" />
              </div>
              <div>
                <div className="common-paragraph author-name">
                  {author.name}
                </div>
                <div className="common-paragraph4">{author.postDate}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
