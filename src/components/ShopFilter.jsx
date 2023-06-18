import React, { useEffect, useState } from "react";
import Select from "react-select";
import Slider from "@mui/material/Slider";

function ShopFilter({ filterObj }) {
  const [category, setcategory] = useState([
    {
      label: "Faishon",
      active: true,
      child: [
        { label: "Wall Art1" },
        { label: "Candle Holder1" },
        { label: "Showcase1" },
      ],
    },
    {
      label: "Decor",
      active: false,
      child: [
        { label: "Wall Art2" },
        { label: "Candle Holder2" },
        { label: "Showcase2" },
      ],
    },
    {
      label: "Lighting",
      active: false,
      child: [
        { label: "Wall Art3" },
        { label: "Candle Holder3" },
        { label: "Showcase3" },
      ],
    },
    {
      label: "Lifestyle",
      active: false,
      child: [
        { label: "Wall Art4" },
        { label: "Candle Holder4" },
        { label: "Showcase4" },
      ],
    },
    {
      label: "Organic",
      active: false,
      child: [
        { label: "Wall Art5" },
        { label: "Candle Holder5" },
        { label: "Showcase5" },
      ],
    },
  ]);
  const [sizes, setsizes] = useState([
    {
      value: "xs-s",
      label: "XS-S",
    },
    {
      value: "s-m",
      label: "S-M",
    },
    {
      value: "m-l",
      label: "M-L",
    },
    {
      value: "l-xl",
      label: "L-XL",
    },
    {
      value: "xl-xxl",
      label: "XL-XXL",
    },
    {
      value: "xxl-xxxl",
      label: "XXL-XXXL",
    },
    {
      value: "s",
      label: "S",
    },
    {
      value: "m",
      label: "M",
    },
    {
      value: "l",
      label: "L",
    },
    {
      value: "xl",
      label: "XL",
    },
    {
      value: "xxl",
      label: "XXL",
    },
    {
      value: "set-of-2",
      label: "Set of 2",
    },
  ]);
  const [price, setPrice] = React.useState([20, 37]);
  const options = [
    { value: "popular", label: "Popular" },
    { value: "Date, new to old", label: "Date, new to old" },
    { value: "Date, old to new", label: "Date, old to new" },
    { value: "Price, low to high", label: "Price, low to high" },
    { value: "Price, high to low", label: "Price, high to low" },
  ];

  const ActiveTab = (e, i) => {
    const temp = category.map((el, index) => {
      if (i === index) {
        if (e.target.checked) {
          el.active = true;
        } else {
          el.active = false;
        }
      } else {
        el.active = el.active;
      }
      return el;
    });
    console.log("clicked", category);
    setcategory([...temp]);
  };

  return (
    <div className="shopfilters">
      <div className="shopfilters-box">
        <p className="shopfilters-title">Filters</p>
        <Select
          classNamePrefix="sort-by"
          options={options}
          placeholder="Sort By"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#eeeeee",
              primary: "#B79F82",
            },
          })}
        />
      </div>
      <div className="shopfilters-box">
        <p className="shopfilters-title">Category</p>
        <ul className="shopfilters-list">
          {category &&
            category.length > 0 &&
            category.map((el, i) => {
              return (
                <li key={i}>
                  <label className="shopfilters-list-title">
                    <input
                      type="checkbox"
                      onChange={(e) => ActiveTab(e, i)}
                      checked={el.active ? true : false}
                    />
                    {el.label}
                  </label>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="shopfilters-box">
        <p className="shopfilters-title">Sub category</p>
        <ul className="shopfilters-list">
          {category &&
            category.length > 0 &&
            category.map((el, i) => {
              if (el.active) {
                return el.child.map((item, index) => {
                  return (
                    <li key={index}>
                      <label className="shopfilters-list-title">
                        <input type="checkbox" />
                        {item.label}
                      </label>
                    </li>
                  );
                });
              }
            })}
        </ul>
      </div>
      
      <div className="shopfilters-box">
        <p className="shopfilters-title">PRICE</p>
        <div className="price-slider">
          <Slider
            getAriaLabel={() => "Price range"}
            value={price}
            onChange={(event, newValue) => setPrice(newValue)}
            valueLabelDisplay="auto"
            getAriaValueText={(price) => `₹${price}`}
          />
        </div>
      </div>
      <div className="shopfilters-box">
        <p className="shopfilters-title">Rating</p>
        <ul className="shopfilters-list">
          <li>
            <label className="shopfilters-list-title">
              <input type="checkbox" />3 Star
            </label>
          </li>
          <li>
            <label className="shopfilters-list-title">
              <input type="checkbox" />4 Star
            </label>
          </li>
          <li>
            <label className="shopfilters-list-title">
              <input type="checkbox" />5 Star
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShopFilter;
