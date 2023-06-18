import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShopFilter from "./ShopFilter";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";

function Shop() {
  return (
    <main>
      <PageBanner
        img={images.shopBanner}
        title="Shop"
        desp="Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep."
      />

      <section className="shop-page mb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3 col-xxl-2">
              <ShopFilter />
            </div>
            <div className="col-12 col-lg-9 col-xxl-10">
              <div className="row gy-4">
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-3">
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
                        <h5 className="price poppin brown fw-semibold">
                          ₹4,500
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
