import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunk/LoginThunk";
import { logout } from "../thunk/LogoutThunk";
import {USER_STORAGE_NAME} from "../constants/config";

const user = JSON.parse(localStorage.getItem(USER_STORAGE_NAME));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


const createExtraReducers = () => {
  return (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })

      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      })


  };
}


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: createExtraReducers
}

);

const { reducer } = AuthSlice;
export default reducer;
