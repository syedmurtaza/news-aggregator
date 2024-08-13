import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../thunk/LogoutThunk";

export function useLogout() {
  const dispatch = useDispatch();
  
  return useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
}