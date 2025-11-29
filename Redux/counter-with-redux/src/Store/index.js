import { createStore } from "redux";
const INITIAL_VALUE = {
  counter : 5
}
const counterReducer = (store = INITIAL_VALUE, action) => {
  return store;
};

const counterStore = createStore(counterReducer);
export default counterStore;
