import React from "react";

type Props = {
  labelName: string;
};

const Button: React.FC<Props> = ({ labelName }) => {
  return (
    <button
      type="submit"
      className="font-Karla w-full mt-2 rounded bg-pumpkin p-3 text-white text-xs font-bold shadow-md"
    >
      {labelName}
    </button>
  );
};

export default Button;
