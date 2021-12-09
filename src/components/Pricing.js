import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const selectorRef = useRef(null);
  const progressRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);
  const [monthlyPrice, setMonthlyPrice] = useState(sliderValue / 3.125);
  const [monthly, setMonthly] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const changeSliderValue = (e) => {
    setSliderValue(e.target.value);
    setMonthlyPrice(e.target.value / 3.125);
    selectorRef.current.style.left = e.target.value + "%";
    progressRef.current.style.width = e.target.value + "%";
  };
  useEffect(() => {
    const resizeWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => window.removeEventListener("resize", resizeWidth);
  });
  return (
    <div className="Pricing">
      <div className="price-req">
        <p id="pageview">{sliderValue * 2}K Pageviews</p>

        <div className="slide">
          <input
            id="slider"
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={changeSliderValue}
          />
          <div id="selector" ref={selectorRef}>
            <svg
              className="select-btn"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="13"
            >
              <g fill="#80FFF3" fillRule="evenodd">
                <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
              </g>
            </svg>
          </div>
          <div id="progress-bar" ref={progressRef}></div>
        </div>
        {monthly ? (
          <p id="price">
            <span>${monthlyPrice.toFixed(2)} </span>/ month
          </p>
        ) : (
          <p id="price">
            <span>
              ${(monthlyPrice * 12 - monthlyPrice * 12 * 0.25).toFixed(2)}{" "}
            </span>
            / year
          </p>
        )}
      </div>
      <div className="billing">
        <p>Monthly Billing</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={!monthly}
            onChange={() => setMonthly(!monthly)}
          ></input>
          <div className="toggle"></div>
        </label>
        <p>
          Yearly Billing
          <span id="discount"> 25% {windowWidth > 540 && "discount"}</span>
        </p>
      </div>
      <hr></hr>
      <div className="trial">
        <div className="benefits">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <button className="trial-btn">Start my trial</button>
      </div>
    </div>
  );
};

export default Pricing;
