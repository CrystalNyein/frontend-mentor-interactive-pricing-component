import React, { useRef, useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const selectorRef = useRef(null);
  const progressRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);
  const changeSliderValue = (e) => {
    setSliderValue(e.target.value);
    selectorRef.current.style.left = e.target.value + "%";
    progressRef.current.style.width = e.target.value + "%";
  };
  return (
    <div className="Pricing">
      <div className="price-req">
        <p id="pageview">{sliderValue * 2}K Pageviews</p>
        <p id="price">
          <span>${(sliderValue / 3.125).toFixed(2)} </span>/month
        </p>
      </div>
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
      <div className="billing">
        <p>Monthly Billing</p>
        <button></button>
        <p>Yearly Billing</p>
        <p>25% discount</p>
      </div>
      <hr></hr>
      <div className="trial">
        <ul className="benefits">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="trial-btn">Start my trial</button>
      </div>
    </div>
  );
};

export default Pricing;
