import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../pic/logo.png";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <img src={logo} alt="logo" />
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <Link to="home" spy={true} smooth={true}>
                  home
                </Link>
              </li>
              <li>
                <Link to="features" spy={true} smooth={true}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="clients" spy={true} smooth={true}>
                  Clients
                </Link>
              </li>
              <li>
                <Link to="resume" spy={true} smooth={true}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
