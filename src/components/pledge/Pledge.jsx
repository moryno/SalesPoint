import React from "react";
import "./Pledge.scss";

const Pledge = () => {
  return (
    <div className="pledge">
      <div className="container">
        <div className="item">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <img src="./img/check.png" alt="" />
            The best for every budget
          </div>
          <p>
            Find high-quality good and services at every price point. No
            overspending, just pay for what you want.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Quality work done quickly
          </div>
          <p>Find the right seller to begin transaction within minutes. .</p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Protected payments, every time
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released
            until you receive the goods.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            24/7 support
          </div>
          <p>
            Find high-quality goods and services at every price point. Don't be
            overcharged, pay for only what you need.
          </p>
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls />
        </div>
      </div>
    </div>
  );
};

export default Pledge;
