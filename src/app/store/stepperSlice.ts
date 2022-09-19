import { createSlice } from "@reduxjs/toolkit";

const initialStepperState = {
  width: 0,
};

export const stepperSlice = createSlice({
  name: "stepperSlice",
  initialState: initialStepperState,
  reducers: {
    increment(state) {
      state.width = state.width + 17;
    },
  },
});

export const stepperAction = stepperSlice.actions;
