const redux = require("redux");

// reducer receives old state and dispatched action, and returns a new state object.
// Should be a pure function.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  else if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };
};

const store = redux.createStore(counterReducer);
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
// console.log(store.getState());

store.dispatch({ type: "decrement" });
// console.log(store.getState());
