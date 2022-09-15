import React, { useEffect, useState, Fragment } from "react";
import ComboBox from "../../ui/ComboBox";
import Button from "../../ui/Button";
import { Select } from "../../ui/Select";

import { useDispatch } from "react-redux";
import { formActions } from "../../app/store/formSlice";
import { useAppSelector } from "../../app/store/store";

import { Controller, useForm } from "react-hook-form";

import { Combobox } from "@headlessui/react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/solid";

export const companies = [
  { id: 1, name: "KMC Solutions" },
  { id: 2, name: "Genfinity" },
  { id: 3, name: "Epicode V.B" },
];

export const person = [
  { id: 0, name: "Walk in" },
  { id: 1, name: "Cannot find name?" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Test Dev" },
  { id: 4, name: "Test Dev" },
];

export const reasonToVisit = [
  { id: 0, name: "Post Interview" },
  { id: 1, name: "Event Organizer" },
  { id: 2, name: "KMC Event" },
  { id: 3, name: "Company Visit" },
  { id: 4, name: "Delivery" },
];

type IFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  companyToVisit: string;
  personToVisit: string;
  register: any;
};

type DataState = {
  id: number;
  name: string;
};

const companiesPopulate = companies.map((data) => (
  <option key={data.id} value={data.name}>
    {data.name}
  </option>
));

const FillUpForm: React.FC = () => {
  const inputName = useAppSelector((state) => state.formState.isInputName);
  const formData = useAppSelector((state) => state.formState.formInputData);
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<DataState>(person[0]);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (values: any) => console.log(values);

  // const dispatch = useDispatch();

  // const formSubmitHandler = (e: any) => {
  //   e.preventDefault();

  //   if (formData.personToVisit === "Cannot find name?") {
  //   }

  //   const isInputFieldComplete = Object.values(formData).every((value) => {
  //     if (value === null || value === "") {
  //       return false;
  //     }
  //     return true;
  //   });

  //   console.log(isInputFieldComplete);
  //   console.log(formData);
  // };

  // const firstnameChangeHandler = (event: any) => {
  //   dispatch(formActions.inputFirstname(event.target.value.trim()));
  // };
  // const lastnameChangeHandler = (event: any) => {
  //   dispatch(formActions.inputLastname(event.target.value.trim()));
  // };
  // const emailChangeHandler = (event: any) => {
  //   dispatch(formActions.inputEmail(event.target.value.trim()));
  // };
  // const personToVisitNameHandler = (event: any) => {
  //   dispatch(formActions.inputPersonToVisitName(event.target.value.trim()));
  // };

  const errorHelper = (
    <p className="mt-2 text-helper text-danger" id="email-description">
      We'll only use this for spam.
    </p>
  );

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-Karla flex flex-col gap-4"
    >
      <div className="w-full flex gap-6">
        <div className="w-1/2">
          <label className="block text-leading font-bold text-gray-900">
            Firstname
          </label>
          <input
            type="text"
            className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
            {...register("firstName", {
              required: true,
              minLength: 1,
              maxLength: 99,
            })}
          />
        </div>
        <div className="w-1/2">
          <label className="block text-leading font-bold text-gray-900">
            Lastname
          </label>
          <input
            type="text"
            className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
            {...register("lastName", {
              required: true,
              minLength: 2,
              maxLength: 99,
            })}
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-leading font-bold text-gray-900"
        >
          Email Address
        </label>
        <input
          type="email"
          className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
          placeholder="you@kmc.solutions"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
      </div>

      {/* <label
          htmlFor="email"
          className="block text-leading font-bold text-gray-900"
        >
          Company to visit
        </label>
        <select className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
          {companiesPopulate}
        </select> */}
      {/* 
      <Select
        dataArray={companies}
        label="Company to visit"
        {...register("companyToVisit")}
      />

      <Select
        dataArray={person}
        label="Person to visit"
        {...register("personToVisit")}
      /> */}

      <Controller
        control={control}
        name="personToVisit"
        render={({ field: { value, onChange } }) => (
          <Combobox as="div" value={value} onChange={onChange}>
            <Combobox.Label className="block text-leading font-bold text-gray-900">
              {selected.name}
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

              {person.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {person.map((person) => (
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
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
        )}
      />

      <Controller
        control={control}
        name="companyToVisit"
        render={({ field: { value, onChange } }) => (
          <Combobox as="div" value={value} onChange={onChange}>
            <Combobox.Label className="block text-leading font-bold text-gray-900">
              {selected.name}
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

              {companies.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {companies.map((data) => (
                    <Combobox.Option
                      key={data.id}
                      value={data}
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
                            {data.name}
                          </span>

                          {selected && (
                            <span
                              className={classNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-pumpkin" : "text-indigo-600"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
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
        )}
      />

      <Button labelName="Next" />
    </form>
  );
  // <form
  //   onSubmit={formSubmitHandler}
  //   className="font-Karla flex flex-col gap-4"
  // >
  //   <div className="flex w-full  gap-6">
  //     <div className="w-1/2">
  //       <label
  //         htmlFor="firstname"
  //         className="block text-leading font-bold text-gray-900"
  //       >
  //         Firstname
  //       </label>
  //       <div className="mt-1">
  //         <input
  //           type="text"
  //           name="firstname"
  //           id="firstname"
  //           onChange={firstnameChangeHandler}
  //           className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
  //           placeholder="Enter firstname here"
  //           aria-describedby="firstname-description"
  //           autoComplete="off"
  //         />
  //       </div>
  //       {/* <p className="mt-2 text-helper text-danger" id="email-description">
  //         We'll only use this for spam.
  //       </p> */}
  //     </div>
  //     <div className="w-1/2">
  //       <label
  //         htmlFor="firstname"
  //         className="block text-leading font-bold text-gray-900"
  //       >
  //         Lastname
  //       </label>
  //       <div className="mt-1">
  //         <input
  //           type="text"
  //           name="lastname"
  //           id="lastname"
  //           onChange={lastnameChangeHandler}
  //           className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
  //           placeholder="Enter lastname here"
  //           aria-describedby="lastname-description"
  //           autoComplete="off"
  //         />
  //       </div>
  //     </div>
  //   </div>
  //   <div className="w-full">
  //     <label
  //       htmlFor="firstname"
  //       className="block text-leading font-bold text-gray-900"
  //     >
  //       Email Address
  //     </label>
  //     <div className="mt-1">
  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         onChange={emailChangeHandler}
  //         className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
  //         placeholder="you@kmc.solutions"
  //         aria-describedby="email-description"
  //         autoComplete="off"
  //       />
  //     </div>
  //   </div>
  //   <ComboBox dataArray={companies} label={"Company to visit"} />
  //   <ComboBox dataArray={person} label={"Person to visit"} />
  //   {inputName && (
  //     <div className="w-full">
  //       <label
  //         htmlFor="firstname"
  //         className="block text-leading font-bold text-gray-900"
  //       >
  //         Input person's name to visit
  //       </label>
  //       <div className="mt-1">
  //         <input
  //           type="text"
  //           name="name"
  //           id="name"
  //           onChange={personToVisitNameHandler}
  //           className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
  //           placeholder="Enter name here"
  //           aria-describedby="name-description"
  //         />
  //       </div>
  //     </div>
  //   )}
  //   <ComboBox dataArray={reasonToVisit} label={"Reason to visit"} />
  //   <Button labelName="Next" />
  // </form>
};

export default FillUpForm;
