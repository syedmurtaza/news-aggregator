// components/common/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NewsPage from "../features/pages/news";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}
export default AppRoutes;