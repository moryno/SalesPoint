import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="featured-action">
          <h1>
            Find the perfect <i>affordable</i> products for your needs
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "selling your goods"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Laptop</button>
            <button>Camera</button>
            <button>Fridge</button>
            <button>Sneakers</button>
            <button>Sofa</button>
          </div>
        </div>
        <div className="featured-image">
          <img src="./img/man.png" alt="featured" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
