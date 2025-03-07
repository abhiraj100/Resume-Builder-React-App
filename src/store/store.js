import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice.js";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  devTools: true,
});

export default store;
