const redux = require("redux");

const INITIAL_VALUE = { counter: 0 };
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCRIMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECRIMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }

  return newStore;
};
const store = redux.createStore(reducer);

const subcriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subcriber);

store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "DECRIMENT" });
store.dispatch({ type: "INCRIMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECRIMENT" });