import React, { Fragment, useState, useEffect } from "react";
import { useAppSelector, addToCartAction } from "../store";
import { useDispatch } from "react-redux";

import CartUI from "../UI/CartUI";

import { Dialog, Transition } from "@headlessui/react";
import { RiCloseCircleLine } from "react-icons/ri";

import testImg from "../assets/featured/new-hire-kit.webp";

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const cartItems = useAppSelector((state) => state.cartSlice.items);
  const totalPrice = useAppSelector((state) => state.cartSlice.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsDisabled(false);
    } else if (cartItems.length <= 0) {
      setIsDisabled(true);
    }
    console.log(cartItems);
    dispatch(addToCartAction.updateTotalPrice());
  }, [cartItems]);

  const removeItemHandler = () => {
    dispatch(addToCartAction.removeItem("i1"));
  };

  const cartItemPopulate = cartItems.map((data: any) => (
    <div className="  bg-gray-100 p-4" key={data.itemId}>
      <RiCloseCircleLine
        onClick={removeItemHandler}
        size={25}
        style={{ color: "red", opacity: "70%" }}
      />
      <img className="mt-2" src={testImg} alt="" />
      <h1 className="mt-4 font-black font-Roboto mb-4 text-center text-xl">
        {data.itemTitle}
      </h1>
      <div className="w-100 h-0.5 mt-2 bg-gray-200"></div>
      <div className="flex flex-row content-between w-3/4 justify-between m-auto">
        <p className="opacity-25 font-bold">QTY</p>
        <p className="font-bold">{data.itemQty}</p>
      </div>
      <div className="flex flex-row content-between w-3/4 justify-between m-auto">
        <p className="opacity-25 font-bold">PRICE</p>
        <p className=" font-bold">{data.itemPrice}</p>
      </div>
      <div className="flex flex-row content-between w-3/4 justify-between m-auto">
        <p className="opacity-25 font-bold">SUB TOTAL</p>
        <p className=" font-bold">{`₱${data.itemPrice * data.itemQty}`}</p>
      </div>
    </div>
  ));

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <React.Fragment>
      <button
        onClick={openModal}
        className="flex items-center justify-between gap-2 py-2 px-4 bg-orange-400 m-auto rounded-md"
      >
        <CartUI />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md only:transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" font-black text-2xl font-Roboto"
                  >
                    CART <span className="text-orange-400">ITEMS</span>
                  </Dialog.Title>

                  <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400"></div>
                  <section className=" w-full rounded-sm p-4">
                    <div className="flex flex-col gap-4">
                      {cartItemPopulate}
                    </div>
                  </section>
                  {cartItems.length <= 0 ? (
                    <h1 className="opacity-25 font-black text-center">
                      NO ITEMS YET
                    </h1>
                  ) : (
                    <div>
                      <div className="flex flex-row gap-10 justify-center items-center ">
                        <p className="font-bold">TOTAL PRICE</p>
                        <p className="text-orange-400 text-2xl font-black">{`₱ ${totalPrice.toFixed(
                          2
                        )}`}</p>
                      </div>
                      <button
                        onClick={() => console.log("CHECKOUT ITEMS")}
                        disabled={isDisabled}
                        className="w-full gap-2 py-2 px-4 bg-orange-400 text-white text-center m-auto rounded-sm font-black font-Roboto mt-2"
                      >
                        CHECKOUT ITEMS
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default Cart;
