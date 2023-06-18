import React, { useState } from "react";
import { images } from "../Utility/Images";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BsFillShareFill } from "react-icons/bs";

function Header() {
  const [scroll, setScroll] = useState(0);
  window.onscroll = () => {
    setScroll(document.documentElement.scrollTop);
  };
  const [menu, setMenu] = useState([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Services",
      path: "/Services",
    },
    {
      name: "Our Stories",
      path: "/Story",
    },
    {
      name: "Portfolio",
      path: "/Portfolio",
    },
    {
      name: "Blogs",
      path: "/Blogs",
    },
    {
      name: "Shop",
      path: "/Shop",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ]);
  return (
    <header style={{ display: "unset" }}>
      <nav className="navbar px-4pc">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <RiBarChartHorizontalLine className="blue" />
          </button>
          <Link to="/" className="navbar-brand position-absolute p-0 m-0">
            <img src={images.logo} className="main-logo" alt="" />
          </Link>
          <ul className="navbar-right">
            <li>
              <a
                className="blue"
                href="tel:+91 9811999027
"
              >
                <div className="icon blue px-3">
                  <FaPhoneAlt />
                </div>
                <span>+91 9811999027</span>
              </a>
            </li>
            <li>
              <a
                className="blue"
                href="mailto:contact@weturndesigns.com
"
              >
                <div className="icon blue px-3">
                  <GrMail />
                </div>
                <span>contact@weturndesigns.com</span>
              </a>
            </li>
            <li>
              <div className="share">
                <div className="icon blue pointer px-3">
                  <BsFillShareFill />
                </div>
                <ul className="social-links">
                  <li>
                    <a href="#" className="icon blue">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon blue">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon blue">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon blue">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/" className="navbar-brand">
                <img src={images.logo} className="main-logo" alt="" />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1">
                {menu.map((item, i) => {
                  return (
                    <li className="nav-item" key={i}>
                      <NavLink className="nav-link" to={item.path}>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`navbar navbar-2 px-4pc sticky-top ${
          scroll > 200 ? "" : "d-none"
        }`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand p-0 m-0">
            <img src={images.logo} className="main-logo" alt="" />
          </Link>
          <ul className="navbar-nav flex-grow-1">
            {menu.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
