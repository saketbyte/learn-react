import { createSlice } from "@reduxjs/toolkit";

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

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
