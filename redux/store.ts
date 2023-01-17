import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import homepageReducer from "./home/homeSlice";
import { homepageApi } from "./home/apiCalls";

// all combined reducers
const combinedReducer = combineReducers({
  home: homepageReducer,
});

// one root reducer
const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

// configured store
const store = () =>
  configureStore({
    reducer: {
      store: rootReducer,
      [homepageApi.reducerPath]: homepageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(homepageApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(store);
