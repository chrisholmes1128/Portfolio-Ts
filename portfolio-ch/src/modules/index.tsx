import { Box } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPasswordPage/ForgotPasswordPage";
import { SkillsPage } from "./SkillsPage";
import DashboardPage from "./DashboardPage";
import { TrainingsPage } from "./TrainingsPage";
import { EducationPage } from "./EducationPage";
import { HomePage } from "./HomePage";
import { isCurrentDeviceMobile } from "../utils/isCurrentDeviceMobile";
import { useState } from "react";

function Pages() {
  const [showHomePage, setShowHomePage] = useState(true);
  const isMobile = isCurrentDeviceMobile();
  const location = useLocation();
  console.log(location);

  const pathname = location.pathname.split("/")?.[1];

  const handleEnterPortfolio = () => {
    setShowHomePage(!showHomePage);
  };

  return (
    <div>
      {showHomePage && !pathname ? (
        <HomePage onEnter={handleEnterPortfolio} />
      ) : (
        <DashboardPage isMobile={isMobile} onExit={handleEnterPortfolio}>
          <Routes>
            <Route element={<EducationPage />} path="/experience" />
            <Route element={<SkillsPage />} path="/skills" />
            <Route element={<TrainingsPage />} path="/training" />
            <Route element={<Navigate to="/" />} path="*" />
          </Routes>
        </DashboardPage>
      )}
    </div>
  );
}

export default Pages;
