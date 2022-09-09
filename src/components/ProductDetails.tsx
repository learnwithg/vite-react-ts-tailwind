import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../store";

import { ITEMS_COLLECTION } from "./AllProducts";

const ProductDetails: React.FC = () => {
  const { productId }: { productId: string } = useParams();
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();

  const cartItems = useAppSelector((state) => state.cartSlice.items);

  const itemIndex = cartItems.findIndex(
    (element: any) => element.itemId === productId
  );

  const productDetails = ITEMS_COLLECTION.find(
    (data) => data.itemId === productId
  );

  const dataObject = {
    itemId: productDetails?.itemId,
    itemTitle: productDetails?.itemName,
    itemPrice: productDetails?.itemPrice,
    itemQty: quantity,
    itemSubTotal: quantity * productDetails?.itemPrice,
  };

  const isFound = cartItems.some((element) => {
    if (element.itemId === productId) {
      return true;
    }
  });

  const addToCartHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isFound) {
      dispatch(addToCartAction.addQty(itemIndex));
    } else {
      dispatch(addToCartAction.addToCart(dataObject));
    }
    dispatch(addToCartAction.updateTotalPrice());
  };

  const qtyValueHandler = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };

  return (
    <div>
      <h1 className="font-black text-2xl mb-6">
        PRODUCT <span className="text-orange-400">DETAILS</span>{" "}
      </h1>
      <div className="w-100 h-0.5 mt-2 mb-5 bg-orange-400"></div>
      <section className="border-2 border-gray-100 border-solid text-lg p-4 flex flex-col items-center text-center">
        <div className="bg-gray-400 w-full m-auto">
          <img
            src={productDetails?.itemImg}
            alt={productDetails?.itemName}
            className="object-contain w-full"
          />
        </div>

        <h1 className="mt-4 font-black text-2xl">{productDetails?.itemName}</h1>
        <h2 className=" font-bold text-2xl text-orange-400">{`₱${productDetails?.itemPrice.toFixed(
          2
        )}`}</h2>
        <p className="my-4 ">{productDetails?.itemDesc}</p>
        <form onSubmit={addToCartHandler}>
          <div className="flex flex-wrap content-center justify-items-center">
            <label className="mb-4 font-bold opacity-25 w-1/2">QUANTITY</label>
            <input
              placeholder="1"
              type="number"
              min="1"
              max="20"
              className="w-1/4 border-2 px-2"
              onChange={qtyValueHandler}
            />
            <button
              type="submit"
              className="w-full gap-2 py-2 px-4 mt-4 bg-orange-400 text-white text-center m-auto rounded-sm"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductDetails;
