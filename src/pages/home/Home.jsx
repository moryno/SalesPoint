import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";

const Home = () => {
  return (
    <>
      <Featured />
      <Trusted />
    </>
  );
};

export default Home;
