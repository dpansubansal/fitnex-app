import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "on-scroll-nav" : ""}`}>
      <div className="nav-items">
        <img src={logo} alt="logo" className="logo" />
        <div className="ul common-paragraph2">
          <div className="li">
            <Link to="hero" spy={true} smooth={true} offset={-115} delay={500}>
              Home
            </Link>
          </div>
          <div className="li">
            <Link to="about" spy={true} smooth={true} offset={-125}>
              About
            </Link>
          </div>
          <div className="li">
            <Link to="features" spy={true} smooth={true} offset={-105}>
              Features
            </Link>
          </div>
          <div className="li">
            <Link to="technology" spy={true} smooth={true} offset={-125}>
              Technology
            </Link>
          </div>
          <div className="li">
            <Link to="testimonials" spy={true} smooth={true} offset={-90}>
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
