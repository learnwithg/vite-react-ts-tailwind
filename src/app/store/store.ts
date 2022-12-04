// import { apiSlice } from "#rtkfeatures/dogs/dogs-api-slice";
import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import { formSlice, formsValidationSlice } from "./formSlice";
import { stepperSlice } from "./stepperSlice";

import { vmsApi } from "../query/vmsApi";

export const store = configureStore({
  reducer: {
    formState: formSlice.reducer,
    formsValidation: formsValidationSlice.reducer,
    stepperState: stepperSlice.reducer,
    [vmsApi.reducerPath]: vmsApi.reducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(vmsApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
