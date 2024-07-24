import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="">
      <div className="nav-items">
        <img src={logo} alt="logo" className="logo" />
        <div className="ul common-paragraph2">
          <div className="li">
            <Link to="hero" smooth={true} activeClass="active">
              Home
            </Link>
          </div>
          <div className="li">About</div>
          <div className="li">Features</div>
          <div className="li">Technology</div>
          <div className="li">Testimonials</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
