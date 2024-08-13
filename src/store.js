import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/AuthSlice";
import messageReducer from "./slices/MessageSlice";
import newsFiltersReducer from './slices/NewsFiltersSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  newsFilters: newsFiltersReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;