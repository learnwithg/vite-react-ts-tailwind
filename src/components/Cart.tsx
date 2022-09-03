import React from "react";
import CartUI from "../UI/CartUI";

const Cart: React.FC = () => {
  return (
    <button className="flex items-center justify-between gap-2 py-2 px-4 bg-orange-400 m-auto rounded-md">
      <p>CART</p>
      <CartUI />
    </button>
  );
};

export default Cart;
