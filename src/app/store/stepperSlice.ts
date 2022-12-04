import { createSlice } from "@reduxjs/toolkit";
import { Console } from "console";

export const initialStepperState = {
  // stepState: {
  //   current: "CURRENT",
  //   upcoming: "UPCOMING",
  //   completed: "COMPLETED",
  // },
  stepState: [
    {
      id: "STEP 1",
      name: "Fill-up form",
      href: "#",
      status: "CURRENT",
      // icon: <UserIcon width={24} />,
    },
    {
      id: "STEP 2",
      name: "Take a snapshot",
      href: "#",
      status: "UPCOMING",
    },
    {
      id: "STEP 4",
      name: "Review Form",
      href: "#",
      status: "UPCOMING",
    },
  ],
};

export const stepperSlice = createSlice({
  name: "stepperSlice",
  initialState: initialStepperState,
  reducers: {
    changeState(state, action) {
      const id = action.payload;
      const found = initialStepperState.stepState.find((data) => {
        return data.id;
      });
      console.log(found);
      // state.stepState =
    },
  },
});

export const stepperAction = stepperSlice.actions;
