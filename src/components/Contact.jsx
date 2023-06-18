import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation, ImQuotesLeft } from "react-icons/im";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";

function Contact() {
  return (
    <main>
      <PageBanner
        img={images.contactBanner}
        title="Contact"
        desp="Super Prime lighting Design and Consultancy."
      />

      <section className="mb-5">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon blue fs-5">
                    <FaPhoneAlt />
                  </div>
                  <h5 className="poppin blue mb-0">Call Us</h5>
                </div>
                <p className="fw-500">
                  <a href="tel:+91 9811999\027">+91 9811999027</a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon blue fs-5">
                    <GrMail />
                  </div>
                  <h5 className="poppin blue mb-0">Email Us</h5>
                </div>
                <p className="fw-500">
                  <a href="mailto:contact@weturndesigns.com">
                    contact@weturndesigns.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon blue fs-5">
                    <ImLocation />
                  </div>
                  <h5 className="poppin blue mb-0">Address</h5>
                </div>
                <p className="fw-500">
                  <a
                    href="https://goo.gl/map\s/KxUsWUDkoKxeTWnt5"
                    target="_blank"
                  >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us ptb-100 pattern-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145603.54323421!2d-93.87321815115406!3d39.65244976076376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sin!4v1668749182578!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 col-md-6">
              <div className="right">
                <div className="title-section mb-3">
                  <h1 className="heading">enquiry form</h1>
                  <p className="text-dark fs-6">
                    Get in touch with us anytome, 24 X 7.
                  </p>
                </div>
                <form action="/" className="form row">
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-custom hvr-bounce-to-right rounded-0 btn-brown"
                    >
                      SEND MeSSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-quote ptb-100 mb-5">
        <div className="container-fluid">
          <div className="box col-12 col-md-4 offset-md-1">
            <div className="quote brown">
              <ImQuotesLeft />
            </div>
            <div className="inner">
              <p className="brown">
                "The essence of interior design will always be about people and
                how they live. It is about the realities of what makes for an
                attractive, civilized, meaningful environment, not about fashion
                or what's in or what's out. This is not an easy job."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
