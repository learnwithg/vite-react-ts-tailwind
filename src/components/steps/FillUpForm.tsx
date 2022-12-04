// import React, { useEffect, useState } from "react";
// import { Button } from "kmc-design-system";
// import { useDispatch } from "react-redux";
// import { formActions, formValidateActions } from "../../app/store/formSlice";
// import { stepperAction } from "../../app/store/stepperSlice";
// import { Controller, useForm } from "react-hook-form";
// import { Combobox } from "@headlessui/react";
// import { ChevronDownIcon, CheckIcon } from "@heroicons/react/solid";
// import { initialStepperState } from "../../app/store/stepperSlice";

// import { useGetReasonToVisitQuery } from "../../app/query/vmsApi";

// export const companies = [
//   { id: 1, name: "KMC Solutions" },
//   { id: 2, name: "Genfinity" },
//   { id: 3, name: "Epicode V.B" },
// ];

// export const person = [
//   { id: 0, name: "Walk in" },
//   { id: 1, name: "Cannot find name?" },
//   { id: 2, name: "John Doe" },
//   { id: 3, name: "Test Dev" },
//   { id: 4, name: "Test Dev" },
// ];

// export const reasonToVisit = [
//   { id: 0, name: "Post Interview" },
//   { id: 1, name: "Event Organizer" },
//   { id: 2, name: "KMC Event" },
//   { id: 3, name: "Company Visit" },
//   { id: 4, name: "Delivery" },
// ];

// type IFormInput = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   companyToVisit: string;
//   personToVisit: string;
//   personToVisitName: string;
//   reasonToVisit: string;
//   register: any;
//   isInputNameShown: boolean;
// };

// type DataState = {
//   id: number;
//   name: string;
// };
import { Input, Select, Button } from "kmc-design-system";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../utils/resolvers/formSchema";
import ComboBox from "../../ui/ComboBox";

const FillUpForm: React.FC = () => {
  // const [query, setQuery] = useState<string>("");
  // const [selected, setSelected] = useState<DataState>(person[0]);
  // const [isInputNameShown, setIsInputNameShown] = useState<boolean>(false);
  // const [isRequired, setIsRequired] = useState<boolean>(false);

  // const { data, isLoading } = useGetReasonToVisitQuery("");

  // console.log(data);

  // const {
  //   control,
  //   handleSubmit,
  //   register,
  //   getFieldState,
  //   watch,
  //   formState: { errors, isValid, dirtyFields },
  // } = useForm<IFormInput>({
  //   defaultValues: {
  //     personToVisit: "",
  //   },
  // });

  // const dispatch = useDispatch();

  // const onSubmit = (values: any) => {
  //   console.log(values);
  //   dispatch(formActions.fillUpForm(values));
  //   dispatch(formValidateActions.validateFillUpForm(true));
  //   dispatch(stepperAction.changeState("STEP 1"));
  // };

  // const watchPersonToVisit = watch("personToVisit");

  // const watchAllFields = watch();

  // // useEffect(() => {
  // //   const { name } = watchPersonToVisit;
  // //   if (name === "Cannot find name?") {
  // //     setIsInputNameShown(true);
  // //     setIsRequired(true);
  // //   } else if (name !== "Cannot find name?") {
  // //     setIsInputNameShown(false);
  // //     setIsRequired(false);
  // //   }
  // // }, [watchPersonToVisit]);

  // const errorHelper = (
  //   <p
  //     className=" text-xs text-interactive-danger-neutral "
  //     id="email-description"
  //   >
  //     This field is required
  //   </p>
  // );

  // function classNames(...classes: any) {
  //   return classes.filter(Boolean).join(" ");
  // }

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  return (
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="font-karla flex flex-col gap-4"
    // >
    //   <div className="w-full flex gap-6">
    //     <div className="w-1/2">
    //       <label className="block text-leading font-bold text-gray-900">
    //         Firstname
    //       </label>
    //       <input
    //         type="text"
    //         className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
    //         {...register("firstName", {
    //           required: true,
    //           minLength: 1,
    //           maxLength: 99,
    //         })}
    //       />
    //       {errors.firstName?.type === "required" && errorHelper}
    //     </div>
    //     <div className="w-1/2">
    //       <label className="block text-leading font-bold text-gray-900">
    //         Lastname
    //       </label>
    //       <input
    //         type="text"
    //         className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
    //         {...register("lastName", {
    //           required: true,
    //           minLength: 2,
    //           maxLength: 99,
    //         })}
    //       />
    //       {errors.lastName?.type === "required" && errorHelper}
    //     </div>
    //   </div>
    //   <div className="w-full">
    //     <label
    //       htmlFor="email"
    //       className="block text-leading font-bold text-gray-900"
    //     >
    //       Email Address
    //     </label>
    //     <input
    //       type="email"
    //       className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs"
    //       placeholder="you@kmc.solutions"
    //       {...register("email", {
    //         required: true,
    //         pattern: {
    //           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //           message: "invalid email address",
    //         },
    //       })}
    //     />
    //     {errors.email?.type === "required" && errorHelper}
    //   </div>

    //   <div className="w-full">
    //     <Controller
    //       control={control}
    //       name="companyToVisit"
    //       render={({ field: { value, onChange } }) => (
    //         <Combobox as="div" value={value} onChange={onChange}>
    //           <Combobox.Label className="block text-leading font-bold text-gray-900">
    //             Company to visit
    //           </Combobox.Label>
    //           <div className="relative mt-1">
    //             <Combobox.Input
    //               className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
    //               onChange={(event) => setQuery(event.target.value)}
    //               displayValue={(person: { name: string }) => person?.name}
    //               autoComplete="off"
    //             />
    //             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //               <ChevronDownIcon
    //                 className="h-5 w-5 text-gray-400"
    //                 aria-hidden="true"
    //               />
    //             </Combobox.Button>

    //             {companies.length > 0 && (
    //               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //                 {companies.map((person) => (
    //                   <Combobox.Option
    //                     key={person.id}
    //                     value={person}
    //                     className={({ active }) =>
    //                       classNames(
    //                         "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100",
    //                         active
    //                           ? "bg-pressed text-pumpkin "
    //                           : "text-gray-900"
    //                       )
    //                     }
    //                   >
    //                     {({ active, selected }) => (
    //                       <>
    //                         <span
    //                           className={classNames(
    //                             "block truncate",
    //                             selected && "font-semibold"
    //                           )}
    //                         >
    //                           {person.name}
    //                         </span>

    //                         {selected && (
    //                           <span
    //                             className={classNames(
    //                               "absolute inset-y-0 right-0 flex items-center pr-4",
    //                               active ? "text-pumpkin" : "text-indigo-600"
    //                             )}
    //                           >
    //                             <CheckIcon
    //                               className="h-5 w-5"
    //                               aria-hidden="true"
    //                             />
    //                           </span>
    //                         )}
    //                       </>
    //                     )}
    //                   </Combobox.Option>
    //                 ))}
    //               </Combobox.Options>
    //             )}
    //           </div>
    //         </Combobox>
    //       )}
    //       rules={{ required: true }}
    //     />
    //     {errors.companyToVisit?.type === "required" && errorHelper}
    //   </div>

    //   <div className="w-full">
    //     <Controller
    //       control={control}
    //       name="personToVisit"
    //       render={({ field: { value, onChange } }) => (
    //         <Combobox as="div" value={value} onChange={onChange}>
    //           <Combobox.Label className="block text-leading font-bold text-gray-900">
    //             Person to visit
    //           </Combobox.Label>
    //           <div className="relative mt-1">
    //             <Combobox.Input
    //               className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
    //               onChange={(event) => setQuery(event.target.value)}
    //               displayValue={(person: { name: string }) => person?.name}
    //               autoComplete="off"
    //             />
    //             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //               <ChevronDownIcon
    //                 className="h-5 w-5 text-gray-400"
    //                 aria-hidden="true"
    //               />
    //             </Combobox.Button>

    //             {person.length > 0 && (
    //               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //                 {person.map((data) => (
    //                   <Combobox.Option
    //                     key={data.id}
    //                     value={data}
    //                     className={({ active }) =>
    //                       classNames(
    //                         "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100",
    //                         active
    //                           ? "bg-pressed text-pumpkin "
    //                           : "text-gray-900"
    //                       )
    //                     }
    //                   >
    //                     {({ active, selected }) => (
    //                       <>
    //                         <span
    //                           className={classNames(
    //                             "block truncate",
    //                             selected && "font-semibold"
    //                           )}
    //                         >
    //                           {data.name}
    //                         </span>

    //                         {selected && (
    //                           <span
    //                             className={classNames(
    //                               "absolute inset-y-0 right-0 flex items-center pr-4",
    //                               active ? "text-pumpkin" : "text-indigo-600"
    //                             )}
    //                           >
    //                             <CheckIcon
    //                               className="h-5 w-5"
    //                               aria-hidden="true"
    //                             />
    //                           </span>
    //                         )}
    //                       </>
    //                     )}
    //                   </Combobox.Option>
    //                 ))}
    //               </Combobox.Options>
    //             )}
    //           </div>
    //         </Combobox>
    //       )}
    //       rules={{ required: true }}
    //     />
    //     {errors.personToVisit?.type === "required" && errorHelper}
    //   </div>

    //   {isInputNameShown && (
    //     <div className="w-full">
    //       <label className="block text-leading font-bold text-gray-900">
    //         Person to visit name
    //       </label>
    //       <input
    //         type="text"
    //         className="block w-full p-3 rounded border text-gray-800 border-gray-400 text-xs focus:bg-white "
    //         {...register("personToVisitName", {
    //           required: isRequired,
    //           minLength: 2,
    //           maxLength: 99,
    //         })}
    //       />
    //       {errors.personToVisitName?.type === "required" && errorHelper}
    //     </div>
    //   )}

    //   <div className="w-full">
    //     {" "}
    //     <Controller
    //       control={control}
    //       name="reasonToVisit"
    //       render={({ field: { value, onChange } }) => (
    //         <Combobox as="div" value={value} onChange={onChange}>
    //           <Combobox.Label className="block text-leading font-bold text-gray-900">
    //             Reason to visit
    //           </Combobox.Label>
    //           <div className="relative mt-1">
    //             <Combobox.Input
    //               className="w-full rounded border border-gray-400 p-3  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
    //               onChange={(event) => setQuery(event.target.value)}
    //               displayValue={(data: { reason: string }) => data?.reason}
    //               autoComplete="off"
    //             />
    //             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //               <ChevronDownIcon
    //                 className="h-5 w-5 text-gray-400"
    //                 aria-hidden="true"
    //               />
    //             </Combobox.Button>

    //             {data && data.data.length > 0 && (
    //               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //                 {data.data.map((data) => (
    //                   <Combobox.Option
    //                     key={data.id}
    //                     value={data}
    //                     className={({ active }) =>
    //                       classNames(
    //                         "relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-gray-100",
    //                         active
    //                           ? "bg-pressed text-pumpkin "
    //                           : "text-gray-900"
    //                       )
    //                     }
    //                   >
    //                     {({ active, selected }) => (
    //                       <>
    //                         <span
    //                           className={classNames(
    //                             "block truncate",
    //                             selected && "font-semibold"
    //                           )}
    //                         >
    //                           {data.reason}
    //                         </span>

    //                         {selected && (
    //                           <span
    //                             className={classNames(
    //                               "absolute inset-y-0 right-0 flex items-center pr-4",
    //                               active ? "text-pumpkin" : "text-indigo-600"
    //                             )}
    //                           >
    //                             <CheckIcon
    //                               className="h-5 w-5"
    //                               aria-hidden="true"
    //                             />
    //                           </span>
    //                         )}
    //                       </>
    //                     )}
    //                   </Combobox.Option>
    //                 ))}
    //               </Combobox.Options>
    //             )}
    //           </div>
    //         </Combobox>
    //       )}
    //       rules={{ required: true }}
    //     />
    //     {errors.reasonToVisit?.type === "required" && errorHelper}
    //   </div>

    //   <Button className="w-full">Next</Button>
    // </form>
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="font-karla text-gray-800 grid gap-2 md:grid-cols-2"
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            error={errors.firstName?.message}
            label="Firstname"
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            error={errors.lastName?.message}
            label="Lastname"
            onChange={onChange}
          />
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            className="md:col-span-2"
            error={errors.emailAddress?.message}
            label="Email Address"
            onChange={onChange}
          />
        )}
      />

      {/* <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Company To Visit</label>
        <Controller
          name="companyToVisit"
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              error={errors.companyToVisit?.message}
              variant="filled"
              className="font-karla"
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Person To Visit</label>
        <Controller
          name="personToVisit"
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              error={errors.personToVisit?.message}
              variant="filled"
              className="font-karla"
              onChange={onChange}
            />
          )}
        />
      </div> */}
      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Company To Visit</label>
        <Controller
          name="companyToVisit"
          control={control}
          render={({ field: { onChange } }) => <ComboBox onChange={onChange} />}
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Person To Visit</label>
        <Controller
          name="personToVisit"
          control={control}
          render={({ field: { onChange } }) => <ComboBox onChange={onChange} />}
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Reason To Visit</label>
        <Controller
          name="reasonToVisit"
          control={control}
          render={({ field: { onChange } }) => <ComboBox onChange={onChange} />}
        />
      </div>
      <p>{errors.reasonToVisit?.message}</p>

      {/* 
      <div className="md:col-span-2">
        <label className="text-xs text-gray-800 ">Company To Visit</label>
        <Select
          variant="filled"
          className="font-karla"
          // {...register("companyToVisit")}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-xs text-gray-800">Person To Visit</label>
        <Select
          variant="filled"
          className="font-karla"
          // {...register("personToVisit")}
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-xs text-gray-800">Reason To Visit</label>
        <Select
          variant="filled"
          className="font-karla"
          // {...register("reasonToVisit")}
        />
      </div> */}
      <Button type="submit" className="w-full mt-4 md:col-span-2">
        Next
      </Button>
    </form>
  );
};

export default FillUpForm;
