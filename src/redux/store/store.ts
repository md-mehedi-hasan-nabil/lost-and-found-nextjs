import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "../features/api/apiSlice"
import authReducer from '../features/auth/authSlice'
import bookReducer from '../features/book/bookSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    book: bookReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch