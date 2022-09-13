import { UserIcon } from "@heroicons/react/solid";

const StepsContainer: React.FC = () => {
  return (
    <div className="bg-white h-36">
      <div className=" bg-gray-400 flex items-center w-60">
        <div className="bg-pumpkin rounded-full p-2">
          <UserIcon className="w-5 h-5 text-white" />
        </div>

        <div className="overflow-hidden rounded-full bg-gray-200 w-full h-1">
          <div
            className="h-1 rounded-full bg-pumpkin"
            style={{ width: "80.10%" }}
          />
        </div>
      </div>

      <p className="text-tiny font-Karla font-bold text-gray-700">STEP 1</p>
      <p className="text-xs font-Karla font-bold">Fill up form </p>
    </div>
  );
};

export default StepsContainer;
