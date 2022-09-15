import React from "react";
import FillUpForm from "./steps/FillUpForm";

const FormsContainer: React.FC = () => {
  return (
    <div className="rounded w-full h-full bg-white mt-6 px-8  py-8 shadow">
      <FillUpForm />
    </div>
  );
};

export default FormsContainer;
