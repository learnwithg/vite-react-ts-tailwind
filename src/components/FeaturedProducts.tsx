import React from "react";

import ProductCard from "../UI/ProductCard";

import cupImg from "../assets/featured/mug.webp";

const FeaturedProducts: React.FC = () => {
  return (
    <div className="mt-5 px-2 text-center">
      <h1 className="font-black text-2xl">
        KMC FEATURED <span className="text-orange-400">PRODUCTS</span>
      </h1>
      <p className="opacity-25">
        Prices are subject to change without prior notice
      </p>
      <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400"></div>
      <div>
        <ProductCard
          itemImg={cupImg}
          itemName={"KMC Branded Ceramic Mug"}
          itemAvailability={"SOLD OUT"}
          itemPrice={140.0}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
