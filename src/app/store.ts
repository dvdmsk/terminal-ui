// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import terminalReducer from '../features/terminal/terminalSlice';

export const store = configureStore({
  reducer: {
    // Here we register our Redusers.

    terminal: terminalReducer,
  },
});

// Define the type for the whole condition (Rootstate)
// `Store.getstate` returns the type that derives the whole condition.

export type RootState = ReturnType<typeof store.getState>;

// Define the type for Dispath Function (Appdispatch)
// `Store.dispatch` returns the type of dispatch function

export type AppDispatch = typeof store.dispatch;