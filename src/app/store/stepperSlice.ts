import { createSlice } from "@reduxjs/toolkit";

export const initialStepperState = {
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
      id: "STEP 3",
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
    forwardStep(state, action) {
      const id = action.payload;
      const stepIndex = initialStepperState.stepState.findIndex(
        (data) => data.id === id
      );
      if (id === "STEP 1") {
        state.stepState[stepIndex].status = "COMPLETED";
        state.stepState[1].status = "CURRENT";
      } else if (id === "STEP 2") {
        state.stepState[stepIndex].status = "COMPLETED";
        state.stepState[2].status = "CURRENT";
      }
    },
    prevStep(state, action) {
      const id = action.payload;
      const stepIndex = initialStepperState.stepState.findIndex(
        (data) => data.id === id
      );
      if (id === "STEP 2") {
        state.stepState[stepIndex].status = "UPCOMING";
        state.stepState[0].status = "CURRENT";
        state.stepState[2].status = "UPCOMING";
      } else if (id === "STEP 3") {
        state.stepState[stepIndex].status = "UPCOMING";
        state.stepState[1].status = "CURRENT";
      }
    },
  },
});

export const stepperAction = stepperSlice.actions;
