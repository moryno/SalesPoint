import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/categorycard/CatCard";
import Pledge from "../../components/pledge/Pledge";
import Explore from "../../components/explore/Explore";
import ProjectCard from "../../components/projectcard/ProjectCard";

const Home = () => {
  return (
    <>
      <Featured />
      <Trusted />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards?.map((card) => (
          <CatCard key={card?.id} item={card} />
        ))}
      </Slide>
      <Pledge />
      <Explore />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </>
  );
};

export default Home;
