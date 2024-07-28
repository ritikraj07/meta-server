import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import portfolioApi from "./rtkQuery/portfolio";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["portfolioApi/executeQuery/fulfilled"],
        ignoredPaths: ["portfolioApi.queries"],
        
      },
    }).concat(portfolioApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// !#console.log(store.getState());
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
