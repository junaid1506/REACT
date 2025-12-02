// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacyToggle from "./privacy";
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacyToggle.reducer,
  },
});

export default counterStore;
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
