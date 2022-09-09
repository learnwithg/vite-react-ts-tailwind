import React from "react";


interface Props {
  buttonName: string;
  onClickHandler(): () => History | any;
}

const Button: React.FC<Props> = ({ buttonName, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="w-full gap-2 py-2 px-4 bg-orange-400 text-white text-center m-auto rounded-sm"
    >
      {buttonName}
    </button>
  );
};

export default Button;
