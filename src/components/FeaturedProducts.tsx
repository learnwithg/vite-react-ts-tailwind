import React from "react";

import ProductCard from "../UI/ProductCard";

import cupImg from "../assets/featured/mug.webp";
import newHireKitImg from "../assets/featured/new-hire-kit.webp";
import newHireMugImg from "../assets/featured/new-hire-mug.webp";
import newHirePenImg from "../assets/featured/new-hire-pen.webp";
import newHireShirtImg from "../assets/featured/new-hire-tshirt.webp";
import newHireTumblerImg from "../assets/featured/new-hire-tumbler.webp";
import powerbankImg from "../assets/featured/powerbank.jpg";

import CategoriesPane from "./CategoriesPane";

const DUMMY_PRODUCTS = [
  {
    itemId: "f1",
    itemImg: cupImg,
    itemName: "KMC Branded Ceramic Mug",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f2",
    itemImg: newHireKitImg,
    itemName: "KMC New Hire Kit",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f3",
    itemImg: newHireMugImg,
    itemName: "KMC New Hire Mug",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f4",
    itemImg: newHirePenImg,
    itemName: "KMC Pen",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f5",
    itemImg: newHireShirtImg,
    itemName: "KMC T-Shirt",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f6",
    itemImg: newHireTumblerImg,
    itemName: "KMC Branded Tumbler",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
  {
    itemId: "f7",
    itemImg: powerbankImg,
    itemName: "KMC Powerbank",
    itemAvailability: "AVAILABLE",
    itemPrice: 100,
    itemCategory: "Appliances",
    itemDesc:
      "Durable Heat Resistant Break Resistant Stain Resistant Lightweight Food Grade Safe",
    categoryAll: "All",
  },
];

const populateProducts = DUMMY_PRODUCTS.map((itemData) => (
  <ProductCard
    linkUrl={`/collections/all/${itemData.itemId}`}
    key={itemData.itemId}
    itemImg={itemData.itemImg}
    itemName={itemData.itemName}
    itemAvailability={itemData.itemAvailability}
    itemPrice={itemData.itemPrice}
  />
));

const FeaturedProducts: React.FC = () => {
  return (
    <div className="mt-5 px-2 text-center">
      <h1 className="font-black text-2xl">
        KMC FEATURED <span className="text-orange-400">PRODUCTS</span>
      </h1>
      <p className="opacity-25">
        Prices are subject to change without prior notice
      </p>
      <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400 xl:mb-10"></div>
      <div className="flex flex-col gap-5 xl:flex-wrap xl:flex-row xl:h-auto xl:items-center xl:justify-center xl:gap-10">
        {populateProducts}
      </div>

      <CategoriesPane />
    </div>
  );
};

export default FeaturedProducts;
