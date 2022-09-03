import React from "react";

import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black font-Roboto font-bold py-5 mt-4">
        <h2 className="text-orange-400 text-lg text-center mb-2">CONTACT US</h2>
        <div className="text-white flex gap-3 justify-center after:items-center">
          <div className="flex items-center gap-2">
            <span>
              <FiMail size={20} />{" "}
            </span>
            shop@kmc.solutions
          </div>
          <span>|</span>

          <div className="flex items-center gap-2">
            <span>
              <FiPhone size={20} />
            </span>
            (02) 8779 6540
          </div>
        </div>
      </div>
      <div className="bg-orange-400 font-Roboto py-5">
        <h3 className="text-center text-white text-sm">
          © Copyright 2022 KMC Solutions - All Rights Reserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
