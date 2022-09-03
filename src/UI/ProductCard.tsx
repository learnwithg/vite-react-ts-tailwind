import React from "react";

import Button from "./Button";

interface Props {
  itemImg: string | undefined;
  itemName: string;
  itemAvailability: string | null;
  itemPrice: number;
}

const ProductCard: React.FC<Props> = ({
  itemImg,
  itemName,
  itemAvailability,
  itemPrice,
}) => {
  return (
    <section className="border-2 border-gray-100 border-solid text-lg ">
      <img src={itemImg} alt="" />
      <h1 className="mt-4 font-bold">{itemName}</h1>
      <p>{`₱` + itemPrice.toFixed(2)}</p>
      <p className="mb-4 font-bold opacity-25">{itemAvailability}</p>
      <Button buttonName="View Details"></Button>
    </section>
  );
};

export default ProductCard;
