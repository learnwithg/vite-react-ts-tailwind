import React from "react";
import homeImg from "../assets/home.png";
import FeaturedProducts from "./FeaturedProducts";

const Home: React.FC = () => {
  return (
    <div>
      <img src={homeImg} alt="Page image" />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
