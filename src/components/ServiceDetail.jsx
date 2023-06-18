import React from "react";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";

function ServiceDetail() {
  return (
    <main>
      <PageBanner
        img={images.storyBanner}
        title="Residential Design"
        desp="Super Prime lighting Design and Consultancy."
      />

      <section className="service-detail mb-100 pattern-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="left">
                <div className="image">
                  <img src={images.portfolio1} alt="" />
                </div>
                <div className="left-content">
                  <h4 className="poppin brown">
                    We are building things for future
                  </h4>
                  <p>
                    Maybe you want to be better at cooking or writing. Please
                    god don’t harvestiong.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="right-content">
                <div className="title-section mb-3">
                  <p className="sub blue">Brighten Every Nook & Corner</p>
                  <h1 className="heading">
                    The perfect balance between inner guiding while still
                    bringing out your
                  </h1>
                </div>
                <p className="mb-1">
                  Architecture bibendum pharetra eleifend. Suspendisse vel
                  volutpat purus, sit amet bibendum nisl. Cras mollis turpis a
                  ipsum ultes, nec condimentum ipsum consequat. Mauris vitae
                  consequat nibh, vitae interdum mi.
                </p>
                <p className="mb-1">
                  Architecture bibendum pharetra eleifend. Suspendisse vel
                  volutpat purus, sit amet bibendum nisl. Cras mollis turpis a
                  ipsum ultes, nec condimentum ipsum consequat. Mauris vitae
                  consequat nibh, vitae interdum mi.
                </p>
                <ul className="list-circle">
                  <li>Architecture bibendum pharetra eleifend. </li>
                  <li>
                    Suspendisse vel volutpat purus, sit amet bibendum nisl.
                  </li>
                  <li>
                    Cras mollis turpis a ipsum ultes, nec condimentum ipsum
                    consequat.
                  </li>
                  <li>Mauris vitae consequat nibh, vitae interdum mi. </li>
                  <li>Mauris vitae consequat nibh, vitae interdum mi. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-100 bg-white">
        <div className="container">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">FAY Designs</p>
            <h1 className="heading">Our Trust</h1>
          </div>
          <div className="row gx-lg-5">
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex gap-3 mb-3">
                  <div className="num blue">1</div>
                  <div className="flex-1">
                    <h5 className="poppin blue">Perfection Every Inch</h5>
                    <p className="fw-500 fs-15 line-height-normal">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex gap-3 mb-3">
                  <div className="num blue">2</div>
                  <div className="flex-1">
                    <h5 className="poppin blue">10 Years Gurantee</h5>
                    <p className="fw-500 fs-15 line-height-normal">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex gap-3 mb-3">
                  <div className="num blue">3</div>
                  <div className="flex-1">
                    <h5 className="poppin blue">Comfortable Support</h5>
                    <p className="fw-500 fs-15 line-height-normal">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-office mb-100 pt-3">
        <div className="container">
          <ul className="row">
            <div className="col-auto">
              <div className="title-section mb-4">
                <h1 className="heading">Visit our office</h1>
              </div>
              <div className="box">
                <p className="brown fw-semibold mb-0 fs-5">Delhi, India</p>
                <p className="mb-1">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
                <a href="tel:+91 9876 543 210" className="blue fw-semibold">
                  +91 9876 543 210
                </a>
              </div>
              <div className="box">
                <p className="brown fw-semibold mb-0 fs-5">Gurgaon, India</p>
                <p className="mb-1">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
                <a href="tel:+91 9876 543 210" className="blue fw-semibold">
                  +91 9876 543 210
                </a>
              </div>
            </div>
          </ul>
        </div>
      </section>

      <section className="consultation ptb-100 bg-fix">
        <div className="container">
          <div className="row consultation-inner g-0">
            <div className="col-12 col-md-6">
              <form action="/" className="form row contact-us">
                <div className="col-12">
                  <div className="title-section mb-3">
                    <h1 className="heading">Book a Free Consult</h1>
                  </div>
                </div>
                <div className="col-12">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-12">
                  <label>Phone No.</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label>Message</label>
                  <textarea rows="5" className="form-control"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-custom hvr-bounce-to-right rounded-0 btn-brown">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={images.portfolio4}
                alt=""
                className="img-fluid h-100 img-cover"
              />
            </div>
          </div>
          <div className="text-center col-12 col-lg-8 mx-auto mt-5">
            <h6 className="poppin">
              It’s not just about redesigning spaces, its about the way they
              make you feel
            </h6>
            <h2 className="poppin my-4">Magical Makeovers</h2>
            <h5 className="poppin mb-3">For Every Home & Budget</h5>
            <p className="text-dark">
              For Every Home & Budget WeTurn is a full-service design studio
              that helps you create classic, luxurious spaces unburdened by
              steep prices. We are a one-stop shop that designs magical
              makeovers for all budgets, from concept to completion.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
