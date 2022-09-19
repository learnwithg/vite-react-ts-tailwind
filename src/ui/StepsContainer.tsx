import { useEffect, useState } from "react";

import { UserIcon } from "@heroicons/react/solid";
import { CameraIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/solid";

import { useAppSelector } from "../app/store/store";

const StepsContainer: React.FC = () => {
  const widthSize = useAppSelector((state) => state.stepperState.width);

  const size = { width: widthSize.toString() + "%" };

  console.log(widthSize);

  return (
    <div className="w-full rounded bg-white flex gap-6 px-8 ">
      {/* STEP #1 */}
      <div className="container bg-white flex flex-col w-72 justify-center gap-2 py-4">
        <div className="  flex items-center gap-3 w-auto">
          <div className="bg-pumpkin rounded-full p-2">
            <UserIcon className="w-5 h-5 text-white" />
          </div>
          <div className="overflow-hidden rounded-full bg-gray-300 w-full h-1">
            <div
              className="h-1 rounded-full bg-pumpkin"
              style={{ width: size.width }}
            />
          </div>
        </div>
        <div className="w-full pl-1">
          <p className="text-tiny font-Karla font-bold text-gray-700 leading-none pb-2">
            STEP 1
          </p>
          <p className="text-xs font-Karla font-bold leading-none">
            Fill up form{" "}
          </p>
        </div>
      </div>
      {/* STEP #2 */}
      <div className="container bg-white flex flex-col w-72 justify-center gap-2 py-4">
        <div className="  flex items-center gap-3 w-auto">
          <div className="bg-gray-400 rounded-full p-2">
            <CameraIcon className="w-5 h-5 text-white" />
          </div>
          <div className="overflow-hidden rounded-full bg-gray-300 w-full h-1">
            <div
              className="h-1 rounded-full bg-gray-300"
              style={{ width: "80.10%" }}
            />
          </div>
        </div>
        <div className="w-full pl-1">
          <p className="text-tiny font-Karla font-bold text-gray-300 leading-none pb-2">
            STEP 2
          </p>
          <p className="text-xs font-Karla font-bold leading-none text-gray-400">
            Take a snapshot
          </p>
        </div>
      </div>
      {/* STEP #3 */}
      <div className="container bg-white flex flex-col w-72 justify-center gap-2 py-4">
        <div className="  flex items-center gap-3 w-auto">
          <div className="bg-gray-400 rounded-full p-2">
            <CheckIcon className="w-5 h-5 text-white" />
          </div>
          <div className="overflow-hidden rounded-full bg-gray-300 w-full h-1">
            <div
              className="h-1 rounded-full bg-gray-300"
              style={{ width: "80.10%" }}
            />
          </div>
        </div>

        <div className="w-full pl-1">
          <p className="text-tiny font-Karla font-bold text-gray-300 leading-none pb-2">
            STEP 3
          </p>
          <p className="text-xs font-Karla font-bold leading-none text-gray-400">
            Review details
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
