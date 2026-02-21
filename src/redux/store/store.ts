import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../api/baseApi';
import cartReducer from '../features/cartSlice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
