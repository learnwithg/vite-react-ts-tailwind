import React from "react";
import kmcLogo from "../assets/logo/kmc-vms-logo.png";
import useTime from "#rtkhooks/useTime";

const Navbar: React.FC = () => {
  const { timeNow, dateNow } = useTime();

  return (
    <nav className="py-4 font-bold flex justify-between w-full px-5 bg-branding-navy font-karla">
      <div>
        <img src={kmcLogo} alt="Company Logo" className="w-28" />
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-white text-right">{dateNow}</p>
        <p className="text-xs text-white text-right">{timeNow}</p>
      </div>
    </nav>
  );
};

export default Navbar;
