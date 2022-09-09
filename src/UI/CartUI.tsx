import React, { Fragment, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const CartUI = () => {
  return (
    <React.Fragment>
      <div className="w-5  float-right ">
        <FiShoppingCart size="100%" className="float-left" />
      </div>
    </React.Fragment>
  );
};

export default CartUI;
