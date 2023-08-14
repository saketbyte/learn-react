// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
// allows to create slices of main store state.
// we create different slices in different files depending on the logic of classification.
// the actions are not needed in slice reducers, because redux automatically manages that for us.
// we must not manipulate existing state. But redux allows simpler ways of doing it, because it uses immer as backend to mutate such code.

const initialState = { counter: 0, showToggle: true };
//createSlice automatically creates action identifiers for us. CounterSlice.actions is an object which is full of keys which match the method name we created inside the reducer.
// These objects are called action objects.

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showToggle = !state.showToggle;
    },
  },
});
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// single state reducer
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// Multiple reducers
// const store = configureStore({
//   reducer: {
//     // counter: counterSlice.reducer
//     // someOther: someOther.reducer
//     }
// })

// const store = createStore(counterSlice.reducer); // redux store
export const counterActions = counterSlice.actions;
export const logActions = authSlice.actions;
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
