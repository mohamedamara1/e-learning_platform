import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
