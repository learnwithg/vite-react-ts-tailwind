import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

import Button from "./Button";

import { Link, useHistory } from "react-router-dom";

const MenuButton: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <Menu>
        <Menu.Button className=" w-10 text-white  ">
          <FiMenu size="80%" />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute -right-full mt-2 origin-top-right divide-y divide-gray-100 rounded-sm bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-4 text-center">
              <Menu.Item
                className="text-white w-screen hover:bg-orange-400"
                as="div"
                onClick={() => {
                  alert("Show Aler");
                }}
              >
                <Link to="/homepage"> Home</Link>
              </Menu.Item>

              <Menu.Item
                className="text-white w-screen px-20 hover:bg-orange-400"
                as="div"
                onClick={() => {
                  alert("Show Aler");
                }}
              >
                <Link to="/collections/all">Catalog</Link>
              </Menu.Item>

              <Menu.Item
                className="text-white w-screen px-20 hover:bg-orange-400"
                as="div"
                onClick={() => {
                  alert("Show Aler");
                }}
              >
                <Link to="/account/register">Register</Link>
              </Menu.Item>
              <Menu.Item className="text-white w-screen px-20 mt-5" as="div">
                <Button
                  buttonName="Login"
                  onClickHandler={() => history.push("/account/login")}
                />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuButton;
