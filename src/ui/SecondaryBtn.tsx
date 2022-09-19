import React from "react";

type Props = {
  labelName: string;
};

const SecondaryBtn: React.FC<Props> = ({ labelName }) => {
  return (
    <button
      type="submit"
      className="font-Karla w-full mt-2 rounded  p-3 text-gray-800 text-xs font-bold border bg-white"
    >
      {labelName}
    </button>
  );
};

export default SecondaryBtn;
