import React from "react";
import FillUpForm from "./steps/FillUpForm";
import Snapshot from "./steps/Snapshot";
import ReviewForm from "./steps/ReviewForm";

import { useAppSelector } from "../../src/app/store/store";

const FormsContainer: React.FC = () => {
  const formValidation = useAppSelector(
    (state) => state.formsValidation.pagesValidation
  );

  return (
    <div className="rounded w-full h-full bg-white mt-6 px-4  py-4 shadow">
      {/* {formValidation.isFillUpFormValid ? <Snapshot /> : <FillUpForm />} */}

      {formValidation.isSnapshotFormValid ? (
        <ReviewForm />
      ) : formValidation.isFillUpFormValid ? (
        <Snapshot />
      ) : (
        <FillUpForm />
      )}
      {/* <ReviewForm /> */}
    </div>
  );
};

export default FormsContainer;
