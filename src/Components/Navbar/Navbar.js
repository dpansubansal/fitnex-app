import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [lastClicked, setLastClicked] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const handleClick = (id) => {
    setLastClicked(id);
    toggleNav();
  };
  const toggleNav = () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.classList.toggle("change");
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`container ${sticky ? "on-scroll-nav" : ""}`}>
      <div className="nav-items container">
        <Link
          to="hero"
          smooth={true}
          offset={-115}
        >
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="ul nav-menu-desktop common-paragraph2">
          <div className={`li ${lastClicked === "home" ? "active" : ""}`}>
            <Link
              to="hero"
              smooth={true}
              offset={-115}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </div>
          <div className={`li ${lastClicked === "about" ? "active" : ""}`}>
            <Link
              to="about"
              smooth={true}
              offset={-125}
              onClick={() => handleClick("about")}
            >
              About
            </Link>
          </div>
          <div className={`li ${lastClicked === "features" ? "active" : ""}`}>
            <Link
              to="features"
              smooth={true}
              offset={-50}
              onClick={() => handleClick("features")}
            >
              Features
            </Link>
          </div>
          <div className={`li ${lastClicked === "technology" ? "active" : ""}`}>
            <Link
              to="technology"
              smooth={true}
              offset={-125}
              onClick={() => handleClick("technology")}
            >
              Technology
            </Link>
          </div>
          <div
            className={`li ${lastClicked === "testimonials" ? "active" : ""}`}
          >
            <Link
              to="testimonials"
              smooth={true}
              offset={-90}
              onClick={() => handleClick("testimonials")}
            >
              Testimonials
            </Link>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="ul nav-menu-mobile common-paragraph2">
          <div className={`li ${lastClicked === "home" ? "active" : ""}`}>
            <Link
              to="hero"
              smooth={true}
              offset={-115}
              onClick={() => handleClick("home")}
            >
              Home
            </Link>
          </div>
          <div className={`li ${lastClicked === "about" ? "active" : ""}`}>
            <Link
              to="about"
              smooth={true}
              offset={-55}
              onClick={() => handleClick("about")}
            >
              About
            </Link>
          </div>
          <div className={`li ${lastClicked === "features" ? "active" : ""}`}>
            <Link
              to="features"
              smooth={true}
              offset={-50}
              onClick={() => handleClick("features")}
            >
              Features
            </Link>
          </div>
          <div className={`li ${lastClicked === "technology" ? "active" : ""}`}>
            <Link
              to="technology"
              smooth={true}
              offset={-125}
              onClick={() => handleClick("technology")}
            >
              Technology
            </Link>
          </div>
          <div
            className={`li ${lastClicked === "testimonials" ? "active" : ""}`}
          >
            <Link
              to="testimonials"
              smooth={true}
              offset={-90}
              onClick={() => handleClick("testimonials")}
            >
              Testimonials
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
