import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showToggle: true }, action) => {
  if (action.type === "toggle")
    return {
      counter: state.counter,
      showToggle: !state.showToggle,
    };
  if (action.type === "increment") return { ...state, counter: state.counter + action.value };
  else if (action.type === "decrement") return { ...state, counter: state.counter - action.value };
  else return { ...state, counter: 0 };
};

const store = createStore(counterReducer); // redux store

export default store;

//  Where to provide this store access?
// To provide mean to allow the access to the top of our component tree.
