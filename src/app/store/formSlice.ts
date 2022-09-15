import { createSlice } from "@reduxjs/toolkit";
import { companies } from "../../components/steps/FillUpForm";
import { person } from "../../components/steps/FillUpForm";
import { reasonToVisit } from "../../components/steps/FillUpForm";

const initialFormState = {
  isInputName: false,
  formInputData: {
    firstname: null,
    lastname: null,
    email: null,
    companyToVisit: null,
    personToVisit: null,
    personToVisitName: undefined,
    reasonToVisit: null,
  },
};

export const formSlice = createSlice({
  name: "formStae",
  initialState: initialFormState,
  reducers: {
    setIsInputting(state, action) {
      if (state.formInputData.personToVisit === "Cannot find name?") {
        state.isInputName = true;
      } else if (state.formInputData.personToVisit !== "Cannot find name?") {
        state.isInputName = false;
      }
    },
    inputFirstname(state, action) {
      state.formInputData.firstname = action.payload;
    },
    inputLastname(state, action) {
      state.formInputData.lastname = action.payload;
    },
    inputEmail(state, action) {
      state.formInputData.email = action.payload;
    },
    inputPersonToVisitName(state, action) {
      state.formInputData.personToVisitName = action.payload;
    },
    inputFromComboBox(state, action) {
      const onCompaniesList = companies.some(
        (data) => data.name === action.payload
      );
      const onPersonsList = person.some((data) => data.name === action.payload);
      const onReasonsList = reasonToVisit.some(
        (data) => data.name === action.payload
      );

      if (onCompaniesList === true) {
        state.formInputData.companyToVisit = action.payload;
      }
      if (onPersonsList === true) {
        state.formInputData.personToVisit = action.payload;
      }
      if (onReasonsList === true) {
        state.formInputData.reasonToVisit = action.payload;
      }
    },
  },
});

export const formActions = formSlice.actions;
