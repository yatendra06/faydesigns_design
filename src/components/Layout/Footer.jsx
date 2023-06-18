import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { images } from "../Utility/Images";

function Footer() {
  return (
    <>
      <section className="py-4 news-letter">
        <div className="container">
          <div className="row align-items-center gx-lg-5">
            <div className="col-12 col-md-4">
              <div className="title-section mb-1">
                <h1 className="heading poppin fw-bold">Newsletter</h1>
              </div>
              <p className="fs-15">
                Beyond more stoic this along goodness hey this news far
                flustered impressive manifest after all.
              </p>
            </div>
            <div className="col-12 col-md-8">
              <form action="/" className="form row">
                <div className="col-12">
                  <label className="text-dark mb-0">
                    Subscribe to Our Weekly Newsletter
                  </label>
                  <div className="d-flex gap-3">
                    <input type="email" className="form-control" />
                    <button className="btn btn-custom hvr-bounce-to-right rounded-0 btn-brown">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="brown-bg">
        <div className="footer">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-12 col-md-6">
                <div className="footer-inner">
                  <Link to="/" className="navbar-brand">
                    <img src={images.logo} className="main-logo" alt="" />
                  </Link>
                  <p>
                    Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel
                    utom diska. Jinesade bel när feras redorade i belogi. FAR
                    paratyp i muvåning, och pesask vyfisat. Viktiga poddradio
                    har un mad och inde.
                  </p>
                  <Link to="/" className="btn bg-white btn-custom blue rounded">
                    Talk to Expert
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="footer-inner">
                  <h4>Services</h4>
                  <ul className="links">
                    <li>
                      <Link to="/">Constructions/Turnkey</Link>
                    </li>
                    <li>
                      <Link to="/">Interior Design</Link>
                    </li>
                    <li>
                      <Link to="/">Renovations</Link>
                    </li>
                    <li>
                      <Link to="/">Feng Shui & Vaastu</Link>
                    </li>
                    <li>
                      <Link to="/">Landscaping</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="footer-inner">
                  <h4>Get In Touch</h4>
                  <ul className="links">
                    <li>
                      <div className="icon">
                        <FaPhoneAlt />
                      </div>
                      <a href="tel:+91 9811999027">+91 9811999027</a>
                    </li>
                    <li>
                      <div className="icon">
                        <GrMail />
                      </div>
                      <a href="mailto:contact@weturndesigns.com">
                        contact@weturndesigns.com
                      </a>
                    </li>
                    <li>
                      <div className="icon">
                        <ImLocation />
                      </div>
                      <a
                        href="https://goo.gl/maps/KxUsWUDkoKxeTWnt5"
                        target="_blank"
                      >
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright row g-0 align-items-center">
          <div className="col-12 col-lg-4">
            <p className="copyright-left">
              © 2022, FAY. Design & Developed by
              <a href="ebslon.com"> Ebslon Infotech</a>
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <ul className="social-links copyright-mid">
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
          <div className="col-12 col-lg-4">
            <ul className="links copyright-right">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>&nbsp;|&nbsp;</li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
