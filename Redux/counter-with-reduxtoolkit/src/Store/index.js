// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacyToggle from "./privacy";
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacyToggle.reducer,
  },
});

export default counterStore;