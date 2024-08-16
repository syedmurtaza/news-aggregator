import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/AuthSlice";
import messageReducer from "./slices/MessageSlice";
import newsFiltersReducer from './slices/NewsFiltersSlice';
import PersonalizedReducer from './slices/PersonalizedSlice';


const reducer = {
  auth: authReducer,
  message: messageReducer,
  newsFilters: newsFiltersReducer,
  pinfo: PersonalizedReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;