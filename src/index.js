import { createStore } from "redux";

const reducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  return state;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });

console.log(store.getState());
