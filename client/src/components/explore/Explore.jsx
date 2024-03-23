import React from "react";
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="explore">
      <div className="container">
        <div className="item">
          <h1>
            salespoint <i>business</i>
          </h1>
          <h1>
            A business solution designed for <i>everyone</i>
          </h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to you
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Connect to sellers with proven business experience
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect seller by a customer success manager
          </div>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Shop easy and save time and energy boost productivity doing anything
            else
          </div>
          <button>Explore SalesPoint Business</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt="explore"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
