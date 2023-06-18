import React from "react";
import { BsCalendarWeekFill, BsFillClockFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });
  return (
    <main>
      <PageBanner
        img={images.aboutBanner}
        title="About Us"
        desp="Super Prime lighting Design and Consultancy."
        className="mb-5"
      />

      <section
        className="about-us ptb-100"
        style={{ backgroundImage: `url(${images.about_bg2})` }}
      >
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
                  <h1 className="heading">
                    Best Designers Architectures for You.
                  </h1>
                </div>
                <div className="content">
                  <p className="mb-1">
                    WeTurn was born out of years of experience in designing
                    vacation homes. After 8 years of functioning as an in-house
                    studio for a chain of boutique home stays, our in-house
                    design portfolio today includes townhouses, apartments, home
                    offices, schools and boutique home stays across the country.
                    We now also retail our-go to pieces of furniture, décor and
                    lamps for those of you who don’t yet need a full makeover,
                    but would like to add an accent or two to refresh a space.
                  </p>
                  <p className="mb-1">
                    We now also retail our-go to pieces of furniture, décor and
                    lamps for those of you who don’t yet need a full makeover,
                    but would like to add an accent or two to refresh a space.
                  </p>
                  <p className="mb-1">
                    We now also retail our-go to pieces of furniture, décor and
                    lamps for those of you who don’t yet need a full makeover,
                    but would like to add an accent or two to refresh a space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="three-box pb-100 px-4pc mb-5">
        <div className="container-fluid">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">FAY Designs</p>
            <h1 className="heading">Why Choose Us</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="image">
                <img src={images.portfolio1} alt="" />
              </div>
              <h4>Fast Building</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="image">
                <img src={images.portfolio2} alt="" />
              </div>
              <h4>Smartly Execute</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="image">
                <img src={images.portfolio3} alt="" />
              </div>
              <h4>Carefully Planned</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="image">
                <img src={images.portfolio4} alt="" />
              </div>
              <h4>Perfect Design</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-100">
        <div className="container">
          <div className="title-section mb-5 col-12 col-md-7 mx-auto text-center">
            <p className="sub blue mx-auto">FAY Designs</p>
            <h1 className="heading">What We Do</h1>
            <p className="fs-6 line-height-normal">
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              . Phasellus sed efficitur dolor, et ultricies sapien.
            </p>
          </div>
          <div className="row gx-lg-5">
            <div className="col-12 col-md-4">
              <div className="location-box brown-bg">
                <div className="d-flex gap-3 mb-3">
                  <div className="icon blue fs-2">
                    <BsFillClockFill />
                  </div>
                  <div>
                    <h5 className="poppin blue">Planning</h5>
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
                  <div className="icon blue fs-2">
                    <HiLightBulb />
                  </div>
                  <div>
                    <h5 className="poppin blue">Our Services</h5>
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
                  <div className="icon blue fs-2">
                    <GiNotebook />
                  </div>
                  <div>
                    <h5 className="poppin blue">Cozy Interior</h5>
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

      <section className="banner mb-100 bg-fix ptb-100 mx-4pc">
        <div className="banner-content">
          <div className="row" ref={ref}>
            <div className="col-12 col-md-4">
              <div className="counter text-center">
                <h1 className="blue">
                  <CountUp
                    start={0}
                    end={inView ? 200 : 0}
                    duration={2.75}
                    suffix="+"
                  >
                    {({ countUpRef, start }) => <span ref={countUpRef} />}
                  </CountUp>
                </h1>
                <h5 className="poppin">PROJECTS COMPLETED</h5>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="counter text-center">
                <h1 className="blue">
                  <CountUp
                    start={0}
                    end={inView ? 150 : 0}
                    duration={2.75}
                    suffix="+"
                  >
                    {({ countUpRef, start }) => <span ref={countUpRef} />}
                  </CountUp>
                </h1>
                <h5 className="poppin">SATISFIED CLIENTS</h5>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="counter text-center">
                <h1 className="blue">
                  <CountUp
                    start={0}
                    end={inView ? 20 : 0}
                    duration={2.75}
                    suffix="+"
                  >
                    {({ countUpRef, start }) => <span ref={countUpRef} />}
                  </CountUp>
                </h1>
                <h5 className="poppin">AWARDS WON</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-service services-page mb-100">
        <div className="container-fluid">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">Brighten Every Nook & Corner</p>
            <h1 className="heading">Our Services</h1>
          </div>
        </div>
        <div className="position-relative px-4pc">
          <div className="service-bg"></div>
          <ul className="row align-items-center">
            <li className="col-12 col-md-4 col-xxl-auto">
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4 col-xxl-auto">
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4 col-xxl-auto">
              <div className="image service-img">
                <img src={images.portfolio1} alt="" />
              </div>
              <div className="image service-img">
                <img src={images.portfolio2} alt="" />
              </div>
            </li>
            <li className="col-12 col-md-4 col-xxl-auto">
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
            <li className="col-12 col-md-4 col-xxl-auto">
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
                <Link to="/" className="btn">
                  Learn More
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="team mb-100">
        <div className="container">
          <div className="title-section mb-5 col-12 col-md-7 mx-auto text-center">
            <p className="sub blue mx-auto">Some thoughts from us</p>
            <h1 className="heading">Our Employees</h1>
            <p className="fs-6 line-height-normal">
              We feel proud for our expert team members beatae ipsum dolor sit
              amet, consectetur adipisicing elit mauris vitae consequat nibh,
              vitae interdum mi.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Autoplay]}
                autoplay
                loop
                speed={2000}
                slidesPerView={4}
                spaceBetween={20}
              >
                <SwiperSlide>
                  <div className="team-box text-center h-auto">
                    <img src={images.team1} alt="" />
                    <h3 className="blue poppin title">Devin</h3>
                    <p className="designation">Lead Intranet Specialist</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-box text-center h-auto">
                    <img src={images.team2} alt="" />
                    <h3 className="blue poppin title">Devin</h3>
                    <p className="designation">Lead Intranet Specialist</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-box text-center h-auto">
                    <img src={images.team3} alt="" />
                    <h3 className="blue poppin title">Devin</h3>
                    <p className="designation">Lead Intranet Specialist</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-box text-center h-auto">
                    <img src={images.team4} alt="" />
                    <h3 className="blue poppin title">Devin</h3>
                    <p className="designation">Lead Intranet Specialist</p>
                  </div>
                </SwiperSlide>
              </Swiper>
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

      <section className="blog mb-100">
        <div className="container">
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
    </main>
  );
}

export default About;
