import React from "react";

import { Link } from "react-router-dom";

interface Props {
  itemImg: string | undefined;
  itemName: string;
  linkUrl: Location | string;
}

const AllProductsCard: React.FC<Props> = ({ itemImg, itemName, linkUrl }) => {
  return (
    <Link
      to={linkUrl}
      className="border-2 p-4 border-gray-100 border-solid text-lg flex flex-col items-center hover:border-orange-400 hover:shadow-md cursor-pointer"
    >
      <div className="py-2 px-2">
        <img src={itemImg} alt="" />
      </div>

      <p className="mt-8 mb-4 w-full py-2 text-center font-bold  text-orange-400">
        {itemName}
      </p>
    </Link>
  );
};

export default AllProductsCard;
