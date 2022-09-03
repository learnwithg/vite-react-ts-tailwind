import { configureStore, createSlice } from "@reduxjs/toolkit";

interface State {
  isShown: boolean;
}

const showAboutState: State = { isShown: false };

const aboutPageSlice = createSlice({
  name: "about",
  initialState: showAboutState,
  reducers: {
    changeAbout(state) {
      state.isShown = !state.isShown;
    },
  },
});

const store = configureStore({ reducer: aboutPageSlice.reducer });

export default store;

export const { changeAbout } = aboutPageSlice.actions;
