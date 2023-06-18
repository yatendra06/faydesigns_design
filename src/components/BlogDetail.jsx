import React from "react";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";

function BlogDetail() {
  return (
    <main>
      <section className="single-blog mb-100">
        <div className="container">
          <div className="main-image mb-3">
            <img src={images.portfolio1} alt="" className="w-100 img-cover" />
          </div>
          <div className="content blog-box">
            <ul className="tags">
              <li>
                <span className="brown">
                  <BsCalendarWeekFill />
                </span>
                January 31, 2019
              </li>
              <li>
                <span className="brown">
                  <FaUserAlt />
                </span>
                Admin
              </li>
            </ul>
            <h4 className="poppin mb-3">
              Design of Building: Planning to Peforming
            </h4>
            <p>
              Never ever think of giving up. Winners never quit and quitters
              never win. Take all negative words out of your mental dictionary
              and focus on the solutions with utmost conviction and patience.
              The battle is never lost until you’ve abandon your vision.
            </p>
            <p>
              the main component of a healthy environment for self esteem is
              that it needs be nurturing. The main compont of a healthy
              environment for self esteem is that it needs be nurturing. The
              main component of a healthy env for self esteem The main compont
              be nurturing It should provide unconditional warmth. The main
              component of a healthy env for self esteem The main compont be
              nurturing It should provide unconditional
            </p>
            <h6>- We all intend to plan ahead.</h6>
            <p>
              We all intend to plan ahead, but too often let the day-to-day
              minutia get in the way of making a calendar for the year. Sure,
              you can’t know every detail to anticipate. Heck, you can’t know
              half the priorities that will pop up in any particular month. But
              you can plan for big picture seasonality, busy-times, and events.
            </p>
            <ul className="list-circle">
              <li>Integer in volutpat libero.</li>
              <li>Vivamus maximus ultricies pulvinar.</li>
              <li>priorities that will pop up in any particular month.</li>
              <li>We all intend to plan ahead.</li>
              <li>The main component of a healthy env for self esteem.</li>
            </ul>
            <p>
              We all intend to plan ahead, but too often let the day-to-day
              minutia get in the way of making a calendar for the year. Sure,
              you can’t know every detail to anticipate. Heck, you can’t know
              half the priorities that will pop up in any particular month. But
              you can plan for big picture seasonality, busy-times, and events.
            </p>
            <p>
              Never ever think of giving up. Winners never quit and quitters
              never win. Take all negative words out of your mental dictionary
              and focus on the solutions with utmost conviction and patience.
              The battle is never lost until you’ve abandon your vision.
            </p>
            <p>
              the main component of a healthy environment for self esteem is
              that it needs be nurturing. The main compont of a healthy
              environment for self esteem is that it needs be nurturing. The
              main component of a healthy env for self esteem The main compont
              be nurturing It should provide unconditional warmth. The main
              component of a healthy env for self esteem The main compont be
              nurturing It should provide unconditional
            </p>
          </div>
        </div>
      </section>

      <section className="blog mb-100">
        <div className="container">
        <div className="title-section mb-5 text-center">
            {/* <p className="sub blue mx-auto">see what’s trending</p> */}
            <h1 className="heading">Similar Blogs</h1>
          </div>
          <div className="row gx-lg-5 gy-4 gy-lg-5">
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/BlogDetail" className="overflow-hidden">
                  <div className="image">
                    <img src={images.portfolio1} alt="" />
                  </div>
                </Link>
                <div>
                  <ul className="tags">
                    <li>
                      <span className="brown">
                        <BsCalendarWeekFill />
                      </span>
                      January 31, 2019
                    </li>
                    <li>
                      <span className="brown">
                        <FaUserAlt />
                      </span>
                      Admin
                    </li>
                  </ul>
                  <h4 className="poppin">
                    <Link to="/BlogDetail">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                  <p className="fs-15 line-height-normal">lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/BlogDetail" className="overflow-hidden">
                  <div className="image">
                    <img src={images.portfolio2} alt="" />
                  </div>
                </Link>
                <div>
                  <ul className="tags">
                    <li>
                      <span className="brown">
                        <BsCalendarWeekFill />
                      </span>
                      January 31, 2019
                    </li>
                    <li>
                      <span className="brown">
                        <FaUserAlt />
                      </span>
                      Admin
                    </li>
                  </ul>
                  <h4 className="poppin">
                    <Link to="/BlogDetail">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                  <p className="fs-15 line-height-normal">lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/BlogDetail" className="overflow-hidden">
                  <div className="image">
                    <img src={images.portfolio3} alt="" />
                  </div>
                </Link>
                <div>
                  <ul className="tags">
                    <li>
                      <span className="brown">
                        <BsCalendarWeekFill />
                      </span>
                      January 31, 2019
                    </li>
                    <li>
                      <span className="brown">
                        <FaUserAlt />
                      </span>
                      Admin
                    </li>
                  </ul>
                  <h4 className="poppin">
                    <Link to="/BlogDetail">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                  <p className="fs-15 line-height-normal">lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetail;
