import counterReducer from "#rtkfeatures/counter/counter-slice";
import { apiSlice } from "#rtkfeatures/dogs/dogs-api-slice";
import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import { formSlice } from "./formSlice";

export const store = configureStore({
  reducer: {
    formState: formSlice.reducer,
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
