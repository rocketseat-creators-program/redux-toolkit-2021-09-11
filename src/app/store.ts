import {
  Action,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { apiSlice } from "../features/api";
import characterReducer from "../features/characterSlice";

export const store = configureStore({
  reducer: {
    characterSlice: characterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
