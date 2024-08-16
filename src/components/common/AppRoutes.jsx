// components/common/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from "./pages/Login";
import NewsPage from "../features/pages/news";

function AppRoutes() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={isLoggedIn ? <Navigate to="/news" /> : <Navigate to="/login" />} />

      <Route
        path="/news"
        element={isLoggedIn ? <NewsPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
export default AppRoutes;