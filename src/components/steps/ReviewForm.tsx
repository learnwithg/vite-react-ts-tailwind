import React, { useState } from "react";
import { useAppSelector } from "../../app/store/store";
import { Button } from "kmc-design-system";
import UserAgreement from "../modal/UserAgreement";
import { formValidateActions } from "../../app/store/formSlice";
import { useDispatch } from "react-redux";

const ReviewForm: React.FC = () => {
  const formImg = useAppSelector((state) => state.formState.formImg);
  const formData = useAppSelector((state) => state.formState.formData);
  const [showTerms, setShowTerms] = useState<boolean>(false);

  console.log(formData);

  const dispatch = useDispatch();

  return (
    <div>
      {showTerms && <UserAgreement />}
      <div className="font-karla gap-4 p-2 rounded md:flex">
        <div className=" w-full md:w-1/2 ">
          <img
            src={formImg}
            alt=""
            className="w-full h-full bg-contain rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <span className="flex items-center gap-2">
            <h1 className="text-lg font-bold leading-none mt-4 md:mt-0">
              Review Details
            </h1>
          </span>
          <div className="w-100 h-1 bg-gray-300 my-2"></div>
          <section className=" flex flex-col gap-3">
            <div>
              <h3 className="block text-leading font-bold ">Name</h3>
              <p className="text-leading">{formData.firstName}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold ">Email Address</h3>
              <p className="text-leading">{formData.email}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold ">
                Company to visit
              </h3>
              <p className="text-leading">{formData.companyToVisit.name}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold ">Person to visit</h3>
              <p className="text-leading">{formData.personToVisit.name}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold ">Reason to visit</h3>
              <p className="text-leading">{formData.reasonToVisit.name}</p>
            </div>
          </section>
        </div>
      </div>
      <div>
        <fieldset className="space-y-5 my-2">
          <legend className="sr-only">Terms and conditions</legend>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                value="Agreed"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-pumpkin focus:ring-pumpkin"
                onChange={(e) => {
                  console.log(e.currentTarget);
                  setShowTerms(!showTerms);
                }}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="comments"
                className="font-Karla font-bold text-gray-700"
              >
                I agree with the terms and conditions
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="w-full flex gap-2 mt-4">
        {/* <SecondaryBtn labelName="Previous" />
      <  <Button labelName="Submit" />> */}
        <Button
          variant="secondary"
          className="w-full"
          onClick={() =>
            dispatch(formValidateActions.validateSnapshotForm(false))
          }
        >
          Previous
        </Button>
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
