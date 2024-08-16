import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const PersonalizedSlice = createSlice({
    name: "PersonalizedMsgBox",
    initialState,
    reducers: {
        setPersonalizedMsgBox: (state, action) => {
            return { pinfo: action.payload };
        },
        clearPersonalizedMsgBox: () => {
            return { pinfo: false };
        },
    },
});

const { reducer, actions } = PersonalizedSlice;

export const { setPersonalizedMsgBox, clearPersonalizedMsgBox } = actions
export default reducer;
