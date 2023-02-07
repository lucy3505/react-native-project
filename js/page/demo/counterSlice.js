import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 1};
console.log('counterSlice');
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      //   debugger;
      state.value++;
      console.log(state.value);
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    multiply: {
      reducer: (state, action) => {
        state.value = state.value * action.payload;
      },
      prepare: value => ({payload: value || 2}), // fallback if the payload is a falsy value
    },
  },
});

export const {multiply, increment, decrement, incrementByAmount} =
  counterSlice.actions;
export default counterSlice.reducer;
