import React from "react";
import logo from "../assets/kmc-logo-in-dark.webp";

import { Link } from "react-router-dom";
import MenuButton from "../UI/MenuButton";

import Cart from "./Cart";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center m-auto w-full xl bg-black h-auto px-8 py-2 font-Poppins">
      <div className=" w-3/12">
        <img
          src={logo}
          alt="Logo of company"
          className="object-fill w-130px h-s32px"
        />
      </div>
      <div className="w-auto flex items-center gap-4">
        <Cart />
        <MenuButton />
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <ul>
        <li>
          <Link to="/homepage"> Home</Link>
        </li>
        <li>
          <Link to="/collections/all">Catalog</Link>
        </li>
        <li>
          <Link to="/account/register">Register</Link>
        </li>
      </ul> */
}
