import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "./Utility/Images";
import PageBanner from "./Utility/PageBanner";

function Portfolio() {
  const [tabs, setTabs] = useState([
    {
      name: "ALL",
      active: true,
      tab: "all",
    },
    {
      name: "INTERIOR",
      active: false,
      tab: "interior",
    },
    {
      name: "THEATERS",
      active: false,
      tab: "theaters",
    },
    {
      name: "RESIDENTIAL",
      active: false,
      tab: "residential",
    },
  ]);

  const [data, setData] = useState([
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio1,
      belongTo: "interior",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio2,
      belongTo: "theaters",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio3,
      belongTo: "residential",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio4,
      belongTo: "interior",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio1,
      belongTo: "residential",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio2,
      belongTo: "interior",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio1,
      belongTo: "theaters",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio2,
      belongTo: "interior",
    },
    {
      name: "CHOOSE YOUR DREAM",
      category: "INTERIOR DESIGN",
      img: images.portfolio3,
      belongTo: "residential",
    },
  ]);

  const activeTab = (i) => {
    const temp = tabs.map((item, index) => {
      i === index ? (item.active = true) : (item.active = false);
      return item;
    });
    setTabs([...temp]);
  };


  return (
    <main>
      <PageBanner
        img={images.portfolioBanner}
        title="Our Portfolio"
        desp="Super Prime lighting Design and Consultancy, Super Prime lighting Design and Consultancy."
      />

      <section className="portfolio-page mb-100">
        <ul className="d-flex align-items-center justify-content-center gap-4 switch-tabs">
          {tabs.map((item, i) => {
            return (
              <li
                key={i}
                className={`${item.active ? "active" : ""}`}
                onClick={() => activeTab(i)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="container-fluid">
          <ul className="row px-4pc align-items-center">
            {tabs.map((item, i) => {
              if (item.active && item.tab === "all") {
                return data.map((el, index) => {
                  return (
                    <li className="col-12 col-md-4 col-xxl-3">
                      {/* <h3>{item.tab}</h3> */}
                      <div className="portfolio-page-inner plus-hover">
                        <div className="image">
                          <Link to="/PortfolioDetail">
                            <img src={el.img} alt="" />
                            <div className="overlay"></div>
                          </Link>
                        </div>
                        <div className="content">
                          <Link to="/PortfolioDetail">
                            <h5 className="poppin">{el.name}</h5>
                            <p>{el.category}</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                });
              }
              if (item.active && item.tab === "interior") {
                return data.map((el, index) => {
                  if (el.belongTo === item.tab) {
                    return(
                      <li className="col-12 col-md-4 col-xxl-3">
                      {/* <h3>{item.tab}</h3> */}
                      <div className="portfolio-page-inner plus-hover">
                        <div className="image">
                          <Link to="/PortfolioDetail">
                            <img src={el.img} alt="" />
                            <div className="overlay"></div>
                          </Link>
                        </div>
                        <div className="content">
                          <Link to="/PortfolioDetail">
                            <h5 className="poppin">{el.name}</h5>
                            <p>{el.category}</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    )
                  }
                });
              }
              if (item.active && item.tab === "theaters") {
                return data.map((el, index) => {
                  if (el.belongTo === item.tab) {
                    return(
                      <li className="col-12 col-md-4 col-xxl-3">
                      {/* <h3>{item.tab}</h3> */}
                      <div className="portfolio-page-inner plus-hover">
                        <div className="image">
                          <Link to="/PortfolioDetail">
                            <img src={el.img} alt="" />
                            <div className="overlay"></div>
                          </Link>
                        </div>
                        <div className="content">
                          <Link to="/PortfolioDetail">
                            <h5 className="poppin">{el.name}</h5>
                            <p>{el.category}</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    )
                  }
                });
              }
              if (item.active && item.tab === "residential") {
                return data.map((el, index) => {
                  if (el.belongTo === item.tab) {
                    return(
                      <li className="col-12 col-md-4 col-xxl-3">
                      {/* <h3>{item.tab}</h3> */}
                      <div className="portfolio-page-inner plus-hover">
                        <div className="image">
                          <Link to="/PortfolioDetail">
                            <img src={el.img} alt="" />
                            <div className="overlay"></div>
                          </Link>
                        </div>
                        <div className="content">
                          <Link to="/PortfolioDetail">
                            <h5 className="poppin">{el.name}</h5>
                            <p>{el.category}</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    )
                  }
                });
              }
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
