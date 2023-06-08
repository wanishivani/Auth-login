//  import { legacy_createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialcounterState = {counter: 0 , Showcounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggle(state) {
      state.Showcounter = !state.Showcounter;
    },
  },
});

const intialAuth = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: intialAuth,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
// const CounterReducer = (state = intial, action) => {
//     if(action.type==='increment'){
//   return {
//     counter: state.counter + 1,
//     Showcounter:state.Showcounter,
//   };
// };
// if(action.type==='increase'){
//   return {
//     counter: state.counter + action.amount,
//     Showcounter:state.Showcounter,
//   };
// }

// if(action.type==='decrement'){

// return {
//     counter: state.counter - 1,
//     Showcounter:state.Showcounter,

// }
// }

// if(action.type==='toggle'){

//   return {
//     Showcounter: !state.Showcounter,
//       counter:state.Showcounter,

//   }
//   }

// return state;
// }
const store = configureStore({
  reducer:{ counter: counterSlice.reducer, auth: AuthSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const AuthActions = AuthSlice.actions;

export default store;
