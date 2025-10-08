import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import userReducer from "./slice/userSlice";

// Create root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Store instance
export default store;

// Direct dispatch access
export const { dispatch } = store;
