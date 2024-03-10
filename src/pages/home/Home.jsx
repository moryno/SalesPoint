import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/categorycard/CatCard";
import Pledge from "../../components/pledge/Pledge";

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
    </>
  );
};

export default Home;
