import React from "react";

function PageBanner({ img, title, desp,className }) {
  return (
    <section
      className={`page-banner ${className?className:'mb-100'}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container">
        <div className="page-banner-inner col-12 col-md-4">
          <h1>{title}</h1>
          <p className="text-dark">{desp}</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
