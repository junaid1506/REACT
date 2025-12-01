// import { createStore } from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit"


const counterSlice = createSlice({
  name :"counter",
  initialState: {counterVal : 0},
  reducers :{
    incriment : (state, action)=>{
      state.counterVal++
    },
    decriment : (state,action)=>{
      state.counterVal--
    },
    add : (state,action)=>{},
    sub : (state,action)=>{},
  }
})




const counterStore = configureStore({
  reducer :{
    counter : counterSlice.reducer
  }
});

export const counterAction =  counterSlice.actions
export default counterStore;



// const INITIAL_VALUE = {
//   counter: 0,
//   privacy : false
// };
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if(action.type  === "INCRIMENT"){
//    return {...store,  counter  : store.counter + 1 } ;
//   }
//   else if(action.type  === "DECREMENT"){
//   return {...store, counter  : store.counter - 1 } 
//    }
//    else if(action.type === "ADD"){
//     return {...store, counter : store.counter + action.payload.num }
//    }  
//    else if(action.type === "SUB"){
//     return { ...store, counter : store.counter - action.payload.num }
//    }
//    else if(action.type === "HANDLEPRIVACY"){
//     return { ...store, privacy : !store.privacy }
//    }
//   return store;
// };
