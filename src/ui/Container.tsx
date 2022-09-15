import React from "react";

interface Props {
  children: JSX.Element;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full m-auto px-20 bg-gray-100 h-screen">{children}</div>
  );
};

export default Container;
