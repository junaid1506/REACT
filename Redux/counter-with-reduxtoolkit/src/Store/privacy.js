import { createSlice } from "@reduxjs/toolkit";

const privacyToggle = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacyHandle: (state, action) => {
     return state = !state;
    },
  },
});

export const privacyAction = privacyToggle.actions;
export default privacyToggle