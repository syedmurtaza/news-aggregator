import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});