import React from "react";
import homeImg from "../assets/home.png";
import FeaturedProducts from "./FeaturedProducts";

const Home: React.FC = () => {
  return (
    <div className="xl:px-80">
      <img src={homeImg} alt="Page image" className="m-auto" />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
