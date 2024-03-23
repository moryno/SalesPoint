import React from "react";
import "./CatCard.scss";

const CatCard = ({ item }) => {
  return (
    <div className="catCard">
      <img src={item.img} alt="catCard" />
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
    </div>
  );
};

export default CatCard;
