import React from "react";
import logo from "../assets/kmc-logo-in-dark.webp";

import { Link } from "react-router-dom";
import MenuButton from "../UI/MenuButton";
import Button from "../UI/Button";

import Cart from "./Cart";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center m-auto w-full xl bg-black h-auto px-8 py-2 font-Poppins xl:px-96">
      <div className=" w-28 ">
        <img
          src={logo}
          alt="Logo of company"
          className="object-fill w-130px h-s32px"
        />
      </div>
      <div className="w-auto flex items-center gap-4">
        <Cart />
        <div className="xl:hidden">
          <MenuButton />
        </div>

        <nav className="hidden xl:flex xl:flex-row xl:gap-10 xl:text-xl xl:items-center xl:ml-5">
          <Link to="/homepage" className="text-white">
            Home
          </Link>
          <Link to="/collections/all" className="text-white">
            Catalog
          </Link>
          <Link to="/account/register" className="text-white">
            Register
          </Link>
          <div>
            <Button
              buttonName="Login"
              onClickHandler={() => history.push("/account/login")}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
