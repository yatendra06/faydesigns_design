import React from "react";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";

function PortfolioDetail() {
  return (
    <main>
      <section className="single-portfolio mb-100">
        <div className="container">
          <div className="main-image mb-4">
            <img src={images.portfolio1} alt="" className="w-100 img-cover" />
          </div>
          <div className="content">
            <h3 className="blue poppin fw-semibold">Luxury Furniture</h3>
            <p className="brown fw-semibold">
              Alex / Aug 8, 2012 / Residential Design
            </p>
            <p>
              We are a Creative Agency & Startup Studio that provides Digital
              Products and Services turns to focus on client success. We
              specialize in user interface design, including front-end
              development which we consider to be an integral part.
            </p>
            <ul className="row">
              <div className="col-12 col-md-3">
                <p className="text-dark fw-semibold mb-0">DATE</p>
                <p>6 August 2019</p>
              </div>
              <div className="col-12 col-md-3">
                <p className="text-dark fw-semibold mb-0">CLIENT</p>
                <p>Envato.com</p>
              </div>
              <div className="col-12 col-md-3">
                <p className="text-dark fw-semibold mb-0">CATEGORIES</p>
                <p>Web Design, WordPress</p>
              </div>
              <div className="col-12 col-md-3">
                <p className="text-dark fw-semibold mb-0">TAGS</p>
                <p>Minimal , Modern , Design</p>
              </div>
            </ul>
            <ul className="row three-image my-5">
              <div className="col-12 col-md-4">
                <div className="image">
                  <img src={images.portfolio1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-4 mt-lg-5">
                <div className="image">
                  <img src={images.portfolio2} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="image">
                  <img src={images.portfolio3} alt="" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section className="video-bg ptb-100 mb-100">
        <div className="container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/kWSHdixzMco"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section className="mb-100">
        <div className="container">
          <div className="title-section mb-5 text-center">
            <h1 className="heading">Similar Portfolio</h1>
          </div>
          <ul className="row g-4">
            <li className="col-12 col-md-4">
              <div className="gallery-inner brown-bg">
                <div className="image plus-hover">
                  <Link to="/">
                    <img src={images.portfolio1} alt="" />
                    <div className="overlay"></div>
                  </Link>
                </div>
                <div className="content">
                  <Link to="/">
                    <h5 className="blue poppin">CHOOSE YOUR DREAM</h5>
                    <p className="blue">INTERIOR DESIGN</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="gallery-inner brown-bg">
                <div className="image plus-hover">
                  <Link to="/">
                    <img src={images.portfolio2} alt="" />
                    <div className="overlay"></div>
                  </Link>
                </div>
                <div className="content">
                  <Link to="/">
                    <h5 className="blue poppin">CHOOSE YOUR DREAM</h5>
                    <p className="blue">INTERIOR DESIGN</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="gallery-inner brown-bg">
                <div className="image plus-hover">
                  <Link to="/">
                    <img src={images.portfolio3} alt="" />
                    <div className="overlay"></div>
                  </Link>
                </div>
                <div className="content">
                  <Link to="/">
                    <h5 className="blue poppin">CHOOSE YOUR DREAM</h5>
                    <p className="blue">INTERIOR DESIGN</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PortfolioDetail;
