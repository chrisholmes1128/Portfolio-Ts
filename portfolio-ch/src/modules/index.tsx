import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPasswordPage/ForgotPasswordPage";
import DashboardPage from "./DashboardPage/DashboardPage";

function Pages() {
  return (
    <Box display="flex" maxHeight="100vh" overflow="hidden">
        <Routes>
          <Route element={<ForgotPasswordPage />} path="/forgot" />
          {/* <Route element={<ResetPasswordPage />} path="/reset" /> */}
          <Route element={<DashboardPage />} path="/" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
    </Box>
  );
}

export default Pages;
