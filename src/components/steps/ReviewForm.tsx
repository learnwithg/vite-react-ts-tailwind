import React, { useState } from "react";
import { useAppSelector } from "../../app/store/store";

import { UserIcon } from "@heroicons/react/solid";

import Button from "../../ui/Button";
import SecondaryBtn from "../../ui/SecondaryBtn";

import UserAgreement from "../modal/UserAgreement";

const ReviewForm: React.FC = () => {
  const formImg = useAppSelector((state) => state.formState.formImg);
  const formData = useAppSelector((state) => state.formState.formData);
  const [showTerms, setShowTerms] = useState<boolean>(false);

  console.log(formData);

  return (
    <div>
      {showTerms && <UserAgreement />}
      <div className="font-Karla flex justify-center items-center gap-4 border p-2 rounded">
        <div className=" w-1/2 ">
          <img
            src={formImg}
            alt=""
            className="w-full h-full bg-contain rounded"
          />
        </div>
        <div className="w-1/2 ">
          <span className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <h1 className="text-xs font-Karla font-bold leading-none">
              Review Details
            </h1>
          </span>
          <div className="w-100 h-px bg-gray-300 my-4"></div>
          <section className=" flex flex-col gap-3">
            <div>
              <h3 className="block text-leading font-bold text-gray-900">
                Name
              </h3>
              <p className="text-leading">{formData.firstName}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold text-gray-900">
                Email Address
              </h3>
              <p className="text-leading">{formData.email}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold text-gray-900">
                Company to visit
              </h3>
              <p className="text-leading">{formData.companyToVisit.name}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold text-gray-900">
                Person to visit
              </h3>
              <p className="text-leading">{formData.personToVisit.name}</p>
            </div>
            <div>
              <h3 className="block text-leading font-bold text-gray-900">
                Reason to visit
              </h3>
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
      <div className="w-full flex gap-4 mt-4">
        <SecondaryBtn labelName="Previous" />
        <Button labelName="Submit" />
      </div>
    </div>
  );
};

export default ReviewForm;
