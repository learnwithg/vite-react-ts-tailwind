import React, { Fragment, useState, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { HiChevronDown, HiCheck } from "react-icons/hi";

type IComboBoxProps = {
  data:
    | { id: number; reason: string }
    | { id: number; company: string }
    | { id: number; person: string }[];
  selectedData: (arg: any) => void;
};

const ComboBox: React.FC<IComboBoxProps> = ({ data, selectedData }) => {
  const [selected, setSelected] = useState("Select");
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? data
      : data.filter((d) => {
          if (d.company) {
            return d.company
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""));
          } else if (d.reason) {
            return d.reason
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""));
          } else if (d.person) {
            return d.person
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""));
          }
        });

  const filteredData = () => {
    if (query === "") {
      return data;
    }
  };

  useEffect(() => {
    selectedData(selected);
    console.log(selected);
  }, [selected]);

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1 ">
        <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left  ">
          <Combobox.Input
            placeholder="Select"
            className="w-full rounded border border-gray-400 px-2 py-3 pr-10 text-md leading-5 text-gray-900 focus:outline-branding-pumpkin focus:outline-1 focus:border-none"
            displayValue={(d: {
              id: number;
              reason: string;
              company: string;
              person: string;
            }) => d.reason || d.company || d.person}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map(
                (option: {
                  id: number;
                  reason: string;
                  company: string;
                  person: string;
                }) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-branding-pumpkin text-white"
                          : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }: any) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.reason || option.person || option.company}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-branding-pumpkin"
                            }`}
                          >
                            <HiCheck className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                )
              )
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default ComboBox;
