import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="nav-items">
        <img src={logo} alt="logo" className="logo" />
        <div className="ul common-paragraph2">
          <div className="li">Home</div>
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
