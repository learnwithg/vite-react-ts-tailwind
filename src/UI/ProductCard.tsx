import React from "react";

import Button from "./Button";

import { Link } from "react-router-dom";

interface Props {
  itemImg: string | undefined;
  itemName: string;
  itemAvailability: string | null;
  itemPrice: number;
  linkUrl: Location | string;
}

const ProductCard: React.FC<Props> = ({
  itemImg,
  itemName,
  itemAvailability,
  itemPrice,
  linkUrl,
}) => {
  return (
    <Link
      to={linkUrl}
      className="border-2 border-gray-100 border-solid text-lg  hover:shadow-md hover:border-orange-400 xl:w-96 xl:h-full"
    >
      <div className="bg-gray-400 w-full m-auto h-80">
        <img
          className="object-cover w-full h-full xl:h-full"
          src={itemImg}
          alt=""
        />
      </div>

      <p className=" w-full py-2 text-center font-bold  text-orange-400">
        {itemName}
      </p>
      <p className="mb-2 font-bold opacity-25">{itemAvailability}</p>
      <p className="mb-4 font-black">{`₱` + itemPrice.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;
6;
