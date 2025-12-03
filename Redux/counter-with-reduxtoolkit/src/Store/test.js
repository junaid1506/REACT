import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : "counter",
  initialState : {intialVal : 0},
  reducers : {
    incriment:(state, action)=>{

    }
  }
})

const counterStore =  configureStore({
  reducer:{
    counter :  counterSlice.reducer
  }
})

export const counterActions =  counterSlice.actions
export default counterStore