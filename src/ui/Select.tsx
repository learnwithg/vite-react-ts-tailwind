import React, { useEffect } from "react";
import { Path, UseFormRegister } from "react-hook-form";

import { Combobox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ComboBox from "./ComboBox";

interface IFormValues {
  personToVisit: string;
  companyToVisit: string;
}

export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string; dataArray: any } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label, dataArray }, ref) => (
  <>
    <label className="block text-leading font-bold text-gray-900">
      {label}
    </label>
    <select
      className="bg-center  mt-1 w-full rounded-md border p-3 border-gray-300   text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    >
      {dataArray.map((data: { id: number; name: string }) => (
        <option className="p-10" key={data.id} value={data.name}>
          <p> {data.name}</p>
        </option>
      ))}
    </select>
    {/* 
    <Combobox as="div">
      <Combobox.Label className="block text-leading font-bold text-gray-900">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => {
            console.log(event.target.value);
          }}
          name={name}
          //   onChange={(event) => setQuery(event.target.value)}
          //   displayValue={(person: { name: string }) => person?.name}
          autoComplete="off"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>
        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {dataArray.map((data: { id: number; name: string }) => (
            <Combobox.Option key={data.id} value={data.name}>
              {data.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox> */}
  </>
));
