import React from "react";

interface Props {
  categoryName: string;
}

const CategoryButton: React.FC<Props> = ({ categoryName }) => {
  return (
    <button className="w-full gap-2 py-2 px-4 border-2 border-orange-400 text-orange-400 text-center m-auto rounded-sm">
      {categoryName}
    </button>
  );
};

export default CategoryButton;
