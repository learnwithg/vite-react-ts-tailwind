import React, { useState, useEffect } from "react";
import Button from "../UI/Button";

import { RiArrowDropDownLine } from "react-icons/ri";

import { Listbox } from "@headlessui/react";

const COMPANY = [
  { name: "KMC Internal Employee" },
  { name: "KMC Staff Leased Employee (Under a client)" },
];

const DEPARTMENT = [
  { name: "Technology Services" },
  { name: "Customer Success" },
  { name: "Procurement" },
  { name: "Facilities" },
  { name: "Projects & Designs " },
  { name: "Finance" },
  { name: "Legal" },
  { name: "Human Resources" },
];

const Register: React.FC = () => {
  const [isInternal, setIsEnternal] = useState<boolean>(true);
  const [company, setCompany] = useState(COMPANY[0]);
  const [department, setDepartment] = useState(DEPARTMENT[0]);

  useEffect(() => {
    if (company.name === `KMC Staff Leased Employee (Under a client)`) {
      setIsEnternal(false);
    } else if (company.name === `KMC Internal Employee`) {
      setIsEnternal(true);
    }
  }, [company]);

  return (
    <form className="flex flex-col my-10 border-2 p-5">
      <h1 className="font-black text-2xl mb-6">Register</h1>
      <label>First Name</label>
      <input
        className="border-2 px-5 py-2 w-full mb-6"
        type="text"
        placeholder="Firstname"
      />
      <label>Lastname</label>
      <input
        className="border-2 px-5 py-2 w-full mb-6"
        type="text"
        placeholder="Lastname"
      />
      <label>Email Address</label>
      <input
        className="border-2 px-5 py-2 w-full mb-6"
        type="email"
        placeholder="Email "
      />
      <label>Password</label>
      <input
        className="border-2 px-5 py-2 w-full mb-6"
        type="password"
        placeholder="Email "
      />
      <label>Company</label>
      <Listbox value={company} onChange={setCompany}>
        <Listbox.Button className="w-full px-5 py-2 flex flex-row items-center justify-between border-2 ">
          {company.name}
          <span>
            <RiArrowDropDownLine size={30} />
          </span>
        </Listbox.Button>
        <Listbox.Options className="border-2 mb-4 py-2 cursor-pointer">
          {COMPANY.map((comp) => (
            <Listbox.Option
              className="hover:bg-orange-400 w-full mb-2  px-5 py-2"
              key={comp.name}
              value={comp}
            >
              {comp.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      {isInternal && (
        <div className="flex flex-col w-full">
          <label className="mt-6">Department</label>
          <Listbox value={department} onChange={setDepartment}>
            <Listbox.Button className="w-full px-5 py-2 flex flex-row items-center justify-between border-2 ">
              {department.name}
              <span>
                <RiArrowDropDownLine size={30} />
              </span>
            </Listbox.Button>
            <Listbox.Options className="border-2 mb-4 py-2 cursor-pointer">
              {DEPARTMENT.map((comp) => (
                <Listbox.Option
                  className="hover:bg-orange-400 w-full mb-2  px-5 py-2 "
                  key={comp.name}
                  value={comp}
                >
                  {comp.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      )}
      <div className="mt-6">
        <Button
          buttonName="Register"
          onClickHandler={function (): () => void {
            throw new Error("Function not implemented.");
          }}
        ></Button>
      </div>
    </form>
  );
};

export default Register;
