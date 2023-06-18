import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper";

function Services() {
  return (
    <main>
      <PageBanner
        img={images.servicesBanner}
        title="Our Services"
        desp="Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep."
      />

      <section className="services-page mb-100">
        <div className="container">
          <div className="title-section mb-5 col-12 col-md-6 mx-auto text-center">
            <p className="sub blue">Our Services</p>
            <h1 className="heading">Brighten Every Nook & Corner</h1>
          </div>
          <ul className="row g-4 g-xl-5">
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">01</div>
                <div className="icon">
                  <img src={images.resident} alt="" />
                </div>
                <div>
                  <h4 className="poppin">residential design</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">02</div>
                <div className="icon">
                  <img src={images.city} alt="" />
                </div>
                <div>
                  <h4 className="poppin">commercial design</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">03</div>
                <div className="icon">
                  <img src={images.home} alt="" />
                </div>
                <div>
                  <h4 className="poppin">Home Stay</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">04</div>
                <div className="icon">
                  <img src={images.landscape} alt="" />
                </div>
                <div>
                  <h4 className="poppin">restaurant & cafe design</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">05</div>
                <div className="icon">
                  <img src={images.restaurant} alt="" />
                </div>
                <div>
                  <h4 className="poppin">Landscaping</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4">
              <div className="services-mid">
                <div className="num brown">06</div>
                <div className="icon">
                  <img src={images.vastu} alt="" />
                </div>
                <div>
                  <h4 className="poppin">vastu and feng shui</h4>
                  <p>
                    Reupholstering or painting your dining table/ chairs, sofa,
                    bed or even sideboard, to give them a fresh new look.
                  </p>
                </div>
                <Link to="/ServiceDetail" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
          </ul>
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

      <section className="pricing-plan mb-100 pattern-3 ptb-100 bg-fix">
        <div className="container">
          <div className="title-section mb-5 col-12 col-md-6 mx-auto text-center">
            <p className="sub blue">Choose Your Pricing Plan</p>
            <h1 className="heading">Pricing Plan</h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="pricing-plan-box">
                <h3 className="title">Basic Plan</h3>
                <h1 className="price brown">
                  ₹480 <span>/Month</span>
                </h1>
                <ul>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Consultation
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Planning
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Render
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    24 / 7 Support
                  </li>
                </ul>
                <Link to="/" className="btn brown fw-semibold">
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="pricing-plan-box">
                <h3 className="title">Regular Plan</h3>
                <h1 className="price brown">
                  ₹620 <span>/Month</span>
                </h1>
                <ul>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Consultation
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Planning
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Render
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    24 / 7 Support
                  </li>
                </ul>
                <Link to="/" className="btn brown fw-semibold">
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="pricing-plan-box">
                <h3 className="title">Deluxe Plan</h3>
                <h1 className="price brown">
                  ₹850 <span>/Month</span>
                </h1>
                <ul>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Consultation
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Planning
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    Project Render
                  </li>
                  <li className="blue">
                    <div className="icon">
                      <BsCheck2All />
                    </div>
                    24 / 7 Support
                  </li>
                </ul>
                <Link to="/" className="btn brown fw-semibold">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner mb-100 bg-fix ptb-100 mx-4pc">
        <div className="banner-content text-center">
          <div className="col-12 col-lg-4 mx-auto">
            <h5 className="poppin fw-semibold">GET STARTED</h5>
            <h1 className="blue">
              We Provide You the Quality With Perfect Credibility
            </h1>
            <h5 className="poppin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <Link
                to="/"
                className="btn btn-custom hvr-bounce-to-right btn-blue"
              >
                GET STARTED
              </Link>
              <Link
                to="/"
                className="btn btn-custom hvr-bounce-to-right btn-blue"
              >
                TALK TO EXPERT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-100">
        <div className="container">
        <div className="title-section mb-5 col-12 col-md-6 mx-auto text-center">
            <p className="sub blue">Frequently Asked Questions</p>
            <h1 className="heading">FAQs</h1>
          </div>
          <div className="row align-items-center gx-lg-5">
            <div className="col-12 col-md-4">
              <img src={images.faq} alt="" className="w-100 img-contain" />
            </div>
            <div className="col-12 col-md-8">
              <div className="faq" id="faq-parent">
                <div className="faq-item">
                  <h2
                    className="faq-header"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   Can I get a quotation in advance for my project?
                    <div className="icon">
                      <AiOutlinePlus />
                    </div>
                  </h2>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-bs-parent="#faq-parent"
                  >
                    <div className="faq-body">
                      <p>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h2
                    className="faq-header"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                   How much does it cost to redecorate a bedroom?
                    <div className="icon">
                      <AiOutlinePlus />
                    </div>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-bs-parent="#faq-parent"
                  >
                    <div className="faq-body">
                      <p>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h2
                    className="faq-header"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                   What types of furniture can you offer?
                    <div className="icon">
                      <AiOutlinePlus />
                    </div>
                  </h2>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-bs-parent="#faq-parent"
                  >
                    <div className="faq-body">
                      <p>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h2
                    className="faq-header"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                   Do you offer a free initial consultation?
                    <div className="icon">
                      <AiOutlinePlus />
                    </div>
                  </h2>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-bs-parent="#faq-parent"
                  >
                    <div className="faq-body">
                      <p>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <h2
                    className="faq-header"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                   Where can I get more information on the interiors?
                    <div className="icon">
                      <AiOutlinePlus />
                    </div>
                  </h2>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-bs-parent="#faq-parent"
                  >
                    <div className="faq-body">
                      <p>
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial pb-5 mb-100">
        <div className="container">
          <div className="title-section text-center mb-5 pb-4">
            <p className="sub blue mx-auto">What People Says?</p>
            <h1 className="heading">TESTIMONIALS</h1>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay
            pagination={{ clickable: true }}
            loop
            speed={2000}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="testimonial-box col-12 col-md-8 col-lg-7 mx-auto text-center">
                <h3 className="blue poppin title">Devin</h3>
                <p className="designation blue">Lead Intranet Specialist</p>
                <h5 className="blue poppin desp">
                  Excepturi praesentium beatae ut nemo commodi. Nemo omnis
                  repudiandae culpa quaerat soluta dolorem aspernatur et.
                  Repellendus sint reprehenderit dignissimos consequatur
                  maiores.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box col-12 col-md-8 col-lg-7 mx-auto text-center">
                <h3 className="blue poppin title">Rahul</h3>
                <p className="designation blue">Lead Intranet Specialist</p>
                <h5 className="blue poppin desp">
                  We feel proud for our expert team members beatae ipsum dolor
                  sit amet, consectetur adipisicing elit mauris vitae consequat
                  nibh, vitae interdum mi..
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-box col-12 col-md-8 col-lg-7 mx-auto text-center">
                <h3 className="blue poppin title">Riya</h3>
                <p className="designation blue">Lead Intranet Specialist</p>
                <h5 className="blue poppin desp">
                  Excepturi praesentium beatae ut nemo commodi. Nemo omnis
                  repudiandae culpa quaerat soluta dolorem aspernatur et.
                  Repellendus sint reprehenderit dignissimos consequatur
                  maiores.
                </h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Services;
