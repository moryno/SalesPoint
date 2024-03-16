import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img src={item.img} alt="productCard" />
      <div className="info">
        <div className="user">
          <img src={item.pp} alt="user" />
          <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="star">
          <img src="./img/star.png" alt="star" />
          <span>{item.star}</span>
        </div>
      </div>
      <hr />
      <div className="detail">
        <img src="./img/heart.png" alt="detail" />
        <div className="price">
          <span>STARTING AT</span>
          <h2>
            $ {item.price}
            <sup>99</sup>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
