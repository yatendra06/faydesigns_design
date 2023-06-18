import { Rating } from "@mui/material";
import React, { useState } from "react";
import { images } from "./Utility/Images";
import { GoQuote } from "react-icons/go";
import { Link } from "react-router-dom";

function ShopDetail() {
  const [bigImg, setBigImg] = useState(images.portfolio1);
  const [smallImg, setSmallImg] = useState([
    images.portfolio2,
    images.portfolio3,
    images.portfolio4,
    images.slide1,
  ]);
  const [quantity, setQuantity] = useState(1);

  const [weight, setWeight] = useState([
    {
      name: "W 100cm X H 120cm",
      active: true,
    },
    {
      name: "W 100cm X H 100cm",
      active: false,
    },
    {
      name: "W 80cm X H 120cm",
      active: false,
    },
    {
      name: "W 100cm X H 160cm",
      active: false,
    },
    {
      name: "W 100cm X H 150cm",
      active: false,
    },
    {
      name: "W 60cm X H 120cm",
      active: false,
    },
    {
      name: "W 100cm X H 150cm",
      active: false,
    },
    {
      name: "W 60cm X H 120cm",
      active: false,
    },
  ]);


  
  const [despcription, setDespcription] = useState([
    {
      name: "Description",
      active: true,
      tab: "1",
    },
    {
      name: "Reviews",
      active: false,
      tab: "2",
    },
  ]);

  const activeWeight = (i) => {
    const temp = weight.map((item, index) => {
      i === index ? (item.active = true) : (item.active = false);
      return item;
    });
    setWeight([...temp]);
  };

  const activeDescriptionTab = (i) => {
    const temp = despcription.map((item, index) => {
      i === index ? (item.active = true) : (item.active = false);
      return item;
    });
    setDespcription([...temp]);
  };

  const changeImg = (img) => {
    setBigImg(img);
  };
  return (
    <main className="border-top pt-5">
      <section className="shop-detail mb-100 px-4pc">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5 col-xxl-6">
              <div className="left">
                <ul className="small-img">
                  {smallImg.map((item, i) => {
                    return (
                      <li key={i}>
                        <div className="image" onClick={() => changeImg(item)}>
                          <img src={item} alt="" />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="image big-img">
                  <img src={bigImg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-xxl-6">
              <div className="right">
                <h2 className="poppin title">
                  The Dreamy Motion Metal Wall Art
                </h2>
                <Rating name="size-medium" defaultValue={4} readOnly />
                <p className="small mb-2">NRI(incl. of all taxes)</p>
                <h3 className="price poppin">
                  <span className="fw-semibold brown">₹600.72</span> &nbsp;
                  <span className="text-muted text-decoration-line-through small">
                    ₹800.00
                  </span>
                </h3>
                <ul className="small-info">
                  <li>
                    <span className="text-dark fw-semibold">Colour: </span>
                    &nbsp;Multicolour
                  </li>
                  <li>
                    <span className="text-dark fw-semibold">Brand: </span>
                    &nbsp;KRAPHY
                  </li>
                  <li>
                    <span className="text-dark fw-semibold">Material: </span>
                    &nbsp;Metal
                  </li>
                  <li>
                    <span className="text-dark fw-semibold">Availability:</span>
                    &nbsp;Only 2 in Stock
                  </li>
                </ul>
                <p className="desp mt-2">
                  Make a decorative wall with this Dreamy Motion Metal Wall Art
                  or The Ecstatic Motion Metal Wall Art sculpture while sticking
                  to the traditional style when you hang this elegant wall art
                  in your dream home.
                </p>
                <ul className="weight">
                  {weight.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`${item.active ? "active" : ""}`}
                        onClick={() => activeWeight(i)}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
                <ul className="btns">
                  <li>
                    <div className="quantity">
                      <div
                        className="plus-minus"
                        onClick={() => setQuantity((item) => item - 1)}
                      >
                        -
                      </div>
                      <div className="num">{quantity}</div>
                      <div
                        className="plus-minus"
                        onClick={() => setQuantity((item) => item + 1)}
                      >
                        +
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="btn btn-custom hvr-bounce-to-right rounded-0 btn-blue">
                      Buy Now
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-custom hvr-bounce-to-right rounded-0 btn-brown">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-description mb-100">
        <div className="container">
          <ul className="tabs">
            {despcription.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${item.active ? "active" : ""}`}
                  onClick={() => activeDescriptionTab(i)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="tab-content">
            {despcription.map((item, i) => {
              if (item.active && item.tab === "1") {
                return (
                  <div className="tab-1">
                    <p>
                      Make a decorative wall with this Dreamy Motion Metal Wall
                      Art or The Ecstatic Motion Metal Wall Art sculpture while
                      sticking to the traditional style when you hang this
                      elegant wall art in your dream home. Sure to grab glances
                      in any space, this lovely decor is crammed with classic
                      elegance. illustrate a metal wall art design that is
                      accented, this artful piece will instantly take up your
                      organization. This art is also finished in distressed
                      tones of multicolored for a splash of eye-catching appeal.
                      Try hanging it above your living room to craft an artful
                      focal point, then build on the traditional style and
                      finish the look with this wall art by hanging your home
                      living room office art’s look.
                    </p>

                    <p>
                      Home & Living Room Decoration: This wall art sculpture is
                      made entirely by hand using traditional skills handed down
                      a durable wrought-iron Flowers pattern that adds a modern
                      design to any room. This handcrafted Flowers wall art
                      piece gives an elegant look to your home decor. Attractive
                      and eye-catcher look with royal finish also for a batter
                      match with your interior decoration.
                    </p>

                    <p>
                      This gorgeous wall decor is made of metal with
                      hand-painted and metal wall art modern . Its unique design
                      makes an eye-catching addition to any rustic and
                      contemporary-inspired decor. An attached keyhole makes for
                      easy wall hanging. Try styling above a sofa and dining
                      room to add personality to empty walls. It is a beautiful
                      artistic statement for any living space in your home. It
                      hangs easily using hardware already included. Bring a
                      touch of decorative flair to your interior with the metal
                      plate wall decor. Color metal circle blends beautifully to
                      create a one-of-a-kind handcrafted art piece. The
                      uniqueness of this wall hanging will complement any living
                      space.
                    </p>
                  </div>
                );
              }
              if (item.active && item.tab === "2") {
                return (
                  <div className="tab-2">
                    <div className="row">
                      <div className="col-12">
                        <div className="people-review">
                          <div className="image">
                            <img src={images.team1} alt="" />
                          </div>
                          <div className="content">
                            <p className="mb-1">
                              <GoQuote className="me-2 fs-4 brown" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Obcaecati inventore architecto
                              magnam error aperiam praesentium perferendis. A
                              porro reiciendis nisi aut eaque? Distinctio
                              quisquam vero obcaecati, dolorem iste quam
                              ratione!
                            </p>
                            <h5 className="poppin blue mb-0 fw-semibold">
                              Devin
                            </h5>
                            <p className="blue fst-italic mb-0 small">
                              Lead Intranet Specialist
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="people-review">
                          <div className="image">
                            <img src={images.team1} alt="" />
                          </div>
                          <div className="content">
                            <p className="mb-1">
                              <GoQuote className="me-2 fs-4 brown" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Obcaecati inventore architecto
                              magnam error aperiam praesentium perferendis. A
                              porro reiciendis nisi aut eaque? Distinctio
                              quisquam vero obcaecati, dolorem iste quam
                              ratione!
                            </p>
                            <h5 className="poppin blue mb-0 fw-semibold">
                              Devin
                            </h5>
                            <p className="blue fst-italic mb-0 small">
                              Lead Intranet Specialist
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="people-review">
                          <div className="image">
                            <img src={images.team1} alt="" />
                          </div>
                          <div className="content">
                            <p className="mb-1">
                              <GoQuote className="me-2 fs-4 brown" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Obcaecati inventore architecto
                              magnam error aperiam praesentium perferendis. A
                              porro reiciendis nisi aut eaque? Distinctio
                              quisquam vero obcaecati, dolorem iste quam
                              ratione!
                            </p>
                            <h5 className="poppin blue mb-0 fw-semibold">
                              Devin
                            </h5>
                            <p className="blue fst-italic mb-0 small">
                              Lead Intranet Specialist
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="people-review">
                          <div className="image">
                            <img src={images.team1} alt="" />
                          </div>
                          <div className="content">
                            <p className="mb-1">
                              <GoQuote className="me-2 fs-4 brown" />
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Obcaecati inventore architecto
                              magnam error aperiam praesentium perferendis. A
                              porro reiciendis nisi aut eaque? Distinctio
                              quisquam vero obcaecati, dolorem iste quam
                              ratione!
                            </p>
                            <h5 className="poppin blue mb-0 fw-semibold">
                              Devin
                            </h5>
                            <p className="blue fst-italic mb-0 small">
                              Lead Intranet Specialist
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="similar-products mb-100">
        <div className="container">
          <div className="title-section mb-4">
            <p className="sub blue mx-auto">Specially for you</p>
            <h1 className="heading">Similar Products</h1>
          </div>
          <div className="row gy-4">
            <div className="col-12 col-md-4">
              <div className="shop-page-box">
                <div className="image">
                  <Link to="/ShopDetail">
                    <img src={images.portfolio1} alt="" />
                  </Link>
                  <ul className="tags">
                    <li>New</li>
                  </ul>
                  <div className="rating">
                    <Rating name="size-medium" defaultValue={2} readOnly />
                  </div>
                </div>
                <div className="content">
                  <Link to="/ShopDetail">
                    <div>
                      <h6 className="poppin mb-0">Name</h6>
                      <p>Brand</p>
                    </div>
                    <h5 className="price poppin brown fw-semibold">₹4,500</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="shop-page-box">
                <div className="image">
                  <Link to="/ShopDetail">
                    <img src={images.portfolio1} alt="" />
                  </Link>
                  <ul className="tags">
                    <li>New</li>
                  </ul>
                  <div className="rating">
                    <Rating name="size-medium" defaultValue={2} readOnly />
                  </div>
                </div>
                <div className="content">
                  <Link to="/ShopDetail">
                    <div>
                      <h6 className="poppin mb-0">Name</h6>
                      <p>Brand</p>
                    </div>
                    <h5 className="price poppin brown fw-semibold">₹4,500</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="shop-page-box">
                <div className="image">
                  <Link to="/ShopDetail">
                    <img src={images.portfolio1} alt="" />
                  </Link>
                  <ul className="tags">
                    <li>New</li>
                  </ul>
                  <div className="rating">
                    <Rating name="size-medium" defaultValue={2} readOnly />
                  </div>
                </div>
                <div className="content">
                  <Link to="/ShopDetail">
                    <div>
                      <h6 className="poppin mb-0">Name</h6>
                      <p>Brand</p>
                    </div>
                    <h5 className="price poppin brown fw-semibold">₹4,500</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShopDetail;
