import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";

//PRODUCT DETAIL SLICE

interface DetailState {
  productId: string | null;
  productTitle: string | null;
  productDesc: string | null;
  productPrice: number | null;
}

export interface CartTypes {
  items: {
    itemId: null | string;
    itemTitle: null | string;
    itemPrice: null | number | undefined;
    itemQty: null | number;
    itemSubTotal: null | number | undefined;
  }[];
  totalPrice: number;
}

interface WritableDraft {
  state: RootState;
}

const cartState: CartTypes = {
  items: [],
  totalPrice: 0,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    addQty(state: WritableDraft<CartTypes>, action: PayloadAction<number>) {
      state.items[action.payload].itemQty =
        state.items[action.payload].itemQty + 1;
      state.items[action.payload].itemSubTotal =
        state.items[action.payload].itemPrice *
        state.items[action.payload].itemQty;
    },
    removeItem(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (element: any) => element.itemId === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
    updateTotalPrice(state) {
      const itemTotal = () => {
        const subTotalsArray: (number | null | undefined)[] = [];
        state.items.forEach((itemData) => {
          subTotalsArray.push(itemData.itemSubTotal);
        });
        console.log(subTotalsArray);
        const initialValue = 0;
        const totalPrice = subTotalsArray.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue,
          initialValue
        );
        state.totalPrice = totalPrice;
      };
      itemTotal();
    },
  },
});

const store = configureStore({
  reducer: {
    cartSlice: cartItemsSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const addToCartAction = cartItemsSlice.actions;
function itemTotal() {
  throw new Error("Function not implemented.");
}
