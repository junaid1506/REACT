import { createSlice } from "@reduxjs/toolkit"

const itemsSlice =  createSlice({
  name :"items",
  initialState : [],
  reducers:{
    addIntialItem :(store)=>{
      return store
    }
  }
})
export const itemsAction = itemsSlice.actions
export default itemsSlice