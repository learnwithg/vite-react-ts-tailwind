import { createSlice } from "@reduxjs/toolkit";

const formValidationState = {
  pagesValidation: {
    isFillUpFormValid: false,
    isSnapshotFormValid: false,
  },
};

export const formsValidationSlice = createSlice({
  name: "formValidState",
  initialState: formValidationState,
  reducers: {
    validateFillUpForm(state, action) {
      state.pagesValidation.isFillUpFormValid = action.payload;
    },
    validateSnapshotForm(state, action) {
      state.pagesValidation.isSnapshotFormValid = action.payload;
    },
  },
});

const initialFormState = {
  formData: {
    firstName: null,
    lastname: null,
    email: null,
    companyToVisit: { id: null, name: null },
    personToVisit: { id: null, name: null },
    reasonToVisit: { id: null, name: null },
  },
  formImg: null,
};

export const formSlice = createSlice({
  name: "formStae",
  initialState: initialFormState,
  reducers: {
    fillUpForm(state, action) {
      state.formData = action.payload;
    },
    pushScreenshot(state, action) {
      state.formImg = action.payload;
    },
  },
});

export const formValidateActions = formsValidationSlice.actions;
export const formActions = formSlice.actions;
