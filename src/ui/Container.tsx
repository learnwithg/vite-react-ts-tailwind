import React from "react";

interface Props {
  children: JSX.Element;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full m-auto px-5 bg-gray-100 h-screen">{children}</div>
  );
};

export default Container;
