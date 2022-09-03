import React from "react";

interface Props {
  children: JSX.Element;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="box-border py-4 px-8 m-auto font-Roboto">{children}</div>
  );
};

export default Container;
