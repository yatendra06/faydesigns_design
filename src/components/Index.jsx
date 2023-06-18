import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper";
import { images } from "./Utility/Images";
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendarWeekFill } from "react-icons/bs";

function Index() {
  const FIRST_IMAGE = {
    imageUrl: images.after,
  };
  const SECOND_IMAGE = {
    imageUrl: images.before,
  };
  return (
    <main>
      <section className="main-slider mb-5 px-4pc">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay
          loop
          speed={2000}
          effect="fade"
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              className="main-slider-box"
              style={{ backgroundImage: `url(${images.slide1})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="main-slider-box"
              style={{ backgroundImage: `url(${images.slide2})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="main-slider-box"
              style={{ backgroundImage: `url(${images.slide3})` }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-us ptb-100">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-12 col-md-6">
              <div className="about-us-left">
                <img src={images.about1} alt="" />
                <img src={images.about2} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-us-right">
                <div className="title-section my-4">
                  <p className="sub blue">About Us</p>
                  <h1 className="heading">
                    Best Designers Architectures for You.
                  </h1>
                </div>
                <p className="border-start">
                  Our signature design process comes standard…refresh, remodel,
                  new and enjoyable design experience
                </p>
                <div className="content">
                  <p>
                    WeTurn was born out of years of experience in designing
                    vacation homes. After 8 years of functioning as an in-house
                    studio for a chain of boutique home stays, our in-house
                    design portfolio today includes townhouses, apartments, home
                    offices, schools and boutique home stays across the country.
                  </p>
                  <p>
                    We now also retail our-go to pieces of furniture, décor and
                    lamps for those of you who don’t yet need a full makeover,
                    but would like to add an accent or two to refresh a space.
                  </p>
                </div>
                <Link
                  to="/"
                  className="btn btn-custom hvr-bounce-to-right rounded-0 btn-blue mt-4"
                >
                  Read More
                </Link>
              </div>
            </div>
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

      <section className="services brown-bg ptb-100">
        <div className="container">
          <div className="title-section mb-5 col-12 col-md-6">
            <p className="sub blue">BEST FEATURES</p>
            <h1 className="heading">
              Our Featured Services Interior Design Transformations
            </h1>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay
            loop
            speed={2000}
            slidesPerView={4}
            spaceBetween={2}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="gallery ptb-100">
        <div className="title-section text-center px-md-5">
          <p className="sub blue mx-auto">BEST WORKS</p>
          <h1 className="heading">Our Portfolio</h1>
        </div>
        <ul className="d-flex align-items-center justify-content-center gap-4 switch-tabs">
          <li className="active">ALL</li>
          <li>INTERIOR</li>
          <li>THEATERS</li>
          <li>RESIDENTIAL</li>
        </ul>
        <ul className="row g-4 px-4pc">
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
          <li className="col-12 col-md-4">
            <div className="gallery-inner brown-bg">
              <div className="image plus-hover">
                <Link to="/">
                  <img src={images.portfolio4} alt="" />
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
        </ul>
      </section>

      <section className="video-bg pb-100">
        <div className="container">
          <div className="title-section text-center mb-5">
            <p className="sub blue mx-auto">Check out our</p>
            <h1 className="heading">Latest Project</h1>
          </div>
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </section>

      <section className="testimonial pt-100 pb-5 mb-100">
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

      <section className="team mb-100">
        <div className="container-fluid pe-lg-0">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="team-left">
                <div className="title-section mb-4">
                  <p className="sub blue mx-auto">Some thoughts form us</p>
                  <h1 className="heading">Our Employees</h1>
                </div>
                <p>
                  We feel proud for our expert team members beatae ipsum dolor
                  sit amet, consectetur adipisicing elit mauris vitae consequat
                  nibh, vitae interdum mi.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="team-right">
                <Swiper
                  modules={[Autoplay]}
                  autoplay
                  loop
                  speed={2000}
                  slidesPerView={3}
                  spaceBetween={20}
                >
                  <SwiperSlide>
                    <div className="team-box text-center">
                      <img src={images.team1} alt="" />
                      <h3 className="blue poppin title">Devin</h3>
                      <p className="designation">Lead Intranet Specialist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-box text-center">
                      <img src={images.team2} alt="" />
                      <h3 className="blue poppin title">Devin</h3>
                      <p className="designation">Lead Intranet Specialist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-box text-center">
                      <img src={images.team3} alt="" />
                      <h3 className="blue poppin title">Devin</h3>
                      <p className="designation">Lead Intranet Specialist</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team-box text-center">
                      <img src={images.team4} alt="" />
                      <h3 className="blue poppin title">Devin</h3>
                      <p className="designation">Lead Intranet Specialist</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog mb-100 px-4pc">
        <div className="container-fluid">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">WHAT’S HAPPENING</p>
            <h1 className="heading">News & Updates</h1>
          </div>
          <div className="row gx-lg-5">
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/" className="overflow-hidden">
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
                    <Link to="/">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/" className="overflow-hidden">
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
                    <Link to="/">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="blog-box">
                <Link to="/" className="overflow-hidden">
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
                    <Link to="/">
                      Design of Building: Planning to Peforming
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insta mb-100 px-4pc">
        <div className="container-fluid">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">INSTAGRAM</p>
            <h1 className="heading">@weturndesigns</h1>
          </div>
          <div className="d-flex align-items-center flex-wrap">
            <Link to="/" className="overflow-hidden insta-box">
              <div className="image">
                <img src={images.portfolio1} alt="" />
              </div>
            </Link>

            <Link to="/" className="overflow-hidden insta-box">
              <div className="image">
                <img src={images.portfolio2} alt="" />
              </div>
            </Link>

            <Link to="/" className="overflow-hidden insta-box">
              <div className="image">
                <img src={images.portfolio3} alt="" />
              </div>
            </Link>

            <Link to="/" className="overflow-hidden insta-box">
              <div className="image">
                <img src={images.portfolio4} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
