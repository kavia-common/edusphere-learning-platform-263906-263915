import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";

/**
 * PUBLIC_INTERFACE
 * store
 * Application Redux store with auth and UI slices.
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer
  },
  middleware: (getDefault) => getDefault()
});

export default store;
