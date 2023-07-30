import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 1,
    arr: [],
}

export const counterSlice = createSlice(
  {
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      addToArray: (state, action) => {
        state.arr.push(state.value);
      },
      resetValue: (state) => {
        state.value = 1
      }
    },
  }
);

export const { increment, decrement, resetValue, addToArray } = counterSlice.actions;

export default counterSlice.reducer