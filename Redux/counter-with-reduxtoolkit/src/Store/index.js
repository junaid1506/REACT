// import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"
const INITIAL_VALUE = {
  counter: 0,
  privacy : false
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  if(action.type  === "INCRIMENT"){
   return {...store,  counter  : store.counter + 1 } ;
  }
  else if(action.type  === "DECREMENT"){
  return {...store, counter  : store.counter - 1 } 
   }
   else if(action.type === "ADD"){
    return {...store, counter : store.counter + action.payload.num }
   }  
   else if(action.type === "SUB"){
    return { ...store, counter : store.counter - action.payload.num }
   }
   else if(action.type === "HANDLEPRIVACY"){
    return { ...store, privacy : !store.privacy }
   }
  return store;
};
const counterStore = configureStore({
  reducer 
});
export default counterStore;