import React, { useState } from "react";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";

function Blog() {
  const [tabs, setTabs] = useState([
    {
      name: "All",
      active: true,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio2,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio3,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio4,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "Travel",
      active: false,
      data: [
        {
          img: images.portfolio3,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio3,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio2,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio3,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "fashion",
      active: false,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio4,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio3,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio2,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "Food",
      active: false,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "festival",
      active: false,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "Seasons",
      active: false,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
    {
      name: "vastu & feng shui",
      active: false,
      data: [
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
        {
          img: images.portfolio1,
          name: "Design of Building: Planning to Peforming",
          desp: "lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.",
          date: "January 31, 2019",
          createdBy: "Admin",
        },
      ],
    },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0].data);

  const tabClick = (i) => {
    const temp = tabs.map((item, index) => {
      i === index ? (item.active = true) : (item.active = false);
      return item;
    });
    setCurrentTab(temp[i].data);
    setTabs([...temp]);
  };

  return (
    <main>
      <PageBanner
        img={images.blogBanner}
        className="mb-0"
        title="Blogs"
        desp="Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep."
      />

      <section className="blog mb-100 px-4pc">
        <div className="container">
          <ul className="blog-filters">
            {tabs.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${item.active ? "active" : ""}`}
                  onClick={() => tabClick(i)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="row gx-lg-5 gy-4 gy-lg-5">
            {currentTab?.map((item, i) => {
              return (
                <div className="col-12 col-md-4">
                  <div className="blog-box">
                    <Link to="/BlogDetail" className="overflow-hidden">
                      <div className="image">
                        <img src={item?.img} alt="" />
                      </div>
                    </Link>
                    <div>
                      <ul className="tags">
                        <li>
                          <span className="brown">
                            <BsCalendarWeekFill />
                          </span>
                          {item?.date}
                        </li>
                        <li>
                          <span className="brown">
                            <FaUserAlt />
                          </span>
                          {item?.createdBy}
                        </li>
                      </ul>
                      <h4 className="poppin">
                        <Link to="/BlogDetail">{item?.name}</Link>
                      </h4>
                      <p className="fs-15 line-height-normal">{item?.desp}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="blog mb-100 px-4pc">
        <div className="container">
          <div className="title-section mb-5 text-center">
            <p className="sub blue mx-auto">see what’s trending</p>
            <h1 className="heading">Now Trending</h1>
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
                  <p className="fs-15 line-height-normal">
                    lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                    eleifend sed ex. Donec quis magna sed felis elementum
                    blandit nec quis sem. Maecen.
                  </p>
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
                  <p className="fs-15 line-height-normal">
                    lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                    eleifend sed ex. Donec quis magna sed felis elementum
                    blandit nec quis sem. Maecen.
                  </p>
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
                  <p className="fs-15 line-height-normal">
                    lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                    eleifend sed ex. Donec quis magna sed felis elementum
                    blandit nec quis sem. Maecen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
