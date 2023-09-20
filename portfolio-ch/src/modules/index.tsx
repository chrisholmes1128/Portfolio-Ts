import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPasswordPage/ForgotPasswordPage";
import { SkillsPage } from "./SkillsPage";
import DashboardPage from "./DashboardPage";
import { TrainingsPage } from "./TrainingsPage";
import { EducationPage } from "./EducationPage";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";

function Pages() {
  return (
    <Box maxHeight="100vh" overflow="hidden">
      <DashboardPage>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<EducationPage />} path="/experience" />
          <Route element={<ForgotPasswordPage />} path="/forgot" />
          <Route element={<SkillsPage />} path="/skills" />
          <Route element={<TrainingsPage />} path="/training" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
      </DashboardPage>
    </Box>
  );
}

export default Pages;
