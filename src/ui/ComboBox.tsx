import React, { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/solid";

import { useDispatch } from "react-redux";
import { formActions } from "../app/store/formSlice";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  dataArray: { id: number; name: string }[];
  label: string;
};

const ComboBox: React.FC<Props> = ({ dataArray, label }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedData, setSelectedData] = useState<{
    id: number;
    name: string;
  }>();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selectedData?.name);

    dispatch(formActions.inputFromComboBox(selectedData?.name));
    dispatch(formActions.setIsInputting(selectedData?.name));
  }, [selectedData]);

  const filteredPeople =
    query === ""
      ? dataArray
      : dataArray.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedData} onChange={setSelectedData}>
      <Combobox.Label className="block text-leading font-bold text-gray-900">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: { name: string }) => person?.name}
          autoComplete="off"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100",
                    active ? "bg-pressed text-pumpkin " : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-pumpkin" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default ComboBox;
