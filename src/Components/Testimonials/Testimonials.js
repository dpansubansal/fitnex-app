import React from "react";
import Carousel from "../Common/Carousel";
import "./Testimonials.css";
import rating5 from "../../assets/rating5.png";
import authorPic from "../../assets/author-pic.png";
import Tag from "../Common/Tag";

const Testimonials = () => {
  const authors = [
    {
      name: "Dipanhu Bansal",
      comment:
        "Practicing yoga on Fitnex has been a wonderful journey. It become my favorite part of the week!.",
      rating: rating5,
      pic: authorPic,
      postDate: "Aug 02, 2024",
    },
    {
      name: "Rohan Purohit",
      comment:
        "This app has transformed my fitness routine! The AI guidance is incredibly accurate and helpful.",
      rating: rating5,
      pic: authorPic,
      postDate: "May 15, 2024",
    },
    {
      name: "Hiresh Shankla",
      comment:
        "I love the hands-free commands. It makes my yoga sessions so much more fluid and enjoyable.",
      rating: rating5,
      pic: authorPic,
      postDate: "May 15, 2024",
    },
    {
      name: "Hitesh Kumawat",
      comment:
        "The progress tracking feature keeps me motivated. I can see my improvement after every session.",
      rating: rating5,
      pic: authorPic,
      postDate: "June 05, 2024",
    },
    {
      name: "Tanvi Rathore",
      comment:
        "As a busy mom, finding time to exercise is tough. This app's quick and effective workouts fit perfectly into my schedule.",
      rating: rating5,
      pic: authorPic,
      postDate: "September 15, 2023",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
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
              <div>
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
