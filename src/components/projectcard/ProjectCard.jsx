import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ item }) => {
  return (
    <div className="projectCard">
      <img src={item?.img} alt="projectCard" />
      <div className="info">
        <img src={item.pp} alt="userProfile" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span className="title">{item.username}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
