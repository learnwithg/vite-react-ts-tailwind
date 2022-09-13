import React from "react";

import kmcLogo from "../assets/logo/kmc-vms-logo.png";
import date from "date-and-time";

const Navbar: React.FC = () => {
  const now = new Date();

  const dateNow = date.format(now, "MMMM DD, YYYY");
  const timeNow = date.format(now, "hh:mm:s A");

  return (
    <nav className=" bg-blue py-4 font-Karla font-bold flex justify-between w-full px-20">
      <div>
        <img src={kmcLogo} alt="Company Logo" className="h-12" />
      </div>
      <div className="text-white text-xs ">
        <p>{dateNow}</p>
        <p className="text-right">{timeNow}</p>
      </div>
    </nav>
  );
};

export default Navbar;
