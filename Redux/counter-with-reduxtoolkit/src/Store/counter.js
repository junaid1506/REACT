import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    incriment: (state, action) => {
      state.counterVal++;
    },
    decriment: (state, action) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    sub: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
})

export const counterAction = counterSlice.actions;
export default counterSlice