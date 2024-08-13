import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = MessageSlice;

export const { setMessage, clearMessage } = actions
export default reducer;
