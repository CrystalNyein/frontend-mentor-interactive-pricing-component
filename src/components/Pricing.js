import React from "react";

const Pricing = () => {
  const changeSliderValue = (e) => {};
  return (
    <div className="Pricing">
      <div className="price-req">
        <p>Pageviews</p>
        <p>
          $ <span>/month</span>
        </p>
      </div>
      <div className="slide">
        <input
          type="range"
          min="0"
          max="200"
          value="100"
          onChange={changeSliderValue}
        />
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
