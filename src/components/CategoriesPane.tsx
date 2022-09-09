import React from "react";
import CategoryButton from "../UI/CategoryButton";

const CategoriesPane: React.FC = () => {
  return (
    <div>
      <h1 className="font-black text-2xl mt-10 mb-5">CATEGORIES</h1>
      <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400"></div>
      <CategoryButton categoryName="Appliances" />
    </div>
  );
};

export default CategoriesPane;
