// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// single state reducer
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// Multiple reducers
// const store = configureStore({
//   reducer: {
//     // counter: counterSlice.reducer
//     // someOther: someOther.reducer
//     }
// })

// const store = createStore(counterSlice.reducer); // redux store

export default store;
// configure store allows merging of reducers easier. We pass an object to it.
//  Where to provide this store access?
// To provide mean to allow the access to the top of our component tree.

// ------------- old reducer

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "toggle")
//     return {
//       counter: state.counter,
//       showToggle: !state.showToggle,
//     };
//   if (action.type === "increment") return { ...state, counter: state.counter + action.value };
//   else if (action.type === "decrement") return { ...state, counter: state.counter - action.value };
//   else return { ...state, counter: 0 };
// };

//createSlice automatically creates action identifiers for us. CounterSlice.actions is an object which is full of keys which match the method name we created inside the reducer.
