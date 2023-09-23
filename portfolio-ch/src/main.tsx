import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./theme";
import { Box } from "@mui/material";
import "./index.css";

function initializeTabIcon() {
  const lightIcon = document.querySelector("link#dark-mode-icon");
  const darkIcon = document.querySelector("link#light-mode-icon");

  const setDarkMode = () => {
    if (lightIcon && darkIcon) {
      lightIcon.remove();
      document.head.append(darkIcon);
    }
  };

  const setLightMode = () => {
    console.log("light mode");
    if (lightIcon && darkIcon) {
      darkIcon.remove();
      document.head.append(lightIcon);
    }
  };

  const matcher = window.matchMedia("(prefers-color-scheme:dark)");

  const onUpdate = () => {
    if (matcher.matches) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  matcher.addEventListener("change", onUpdate);
}

initializeTabIcon();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Box maxHeight="100vh" overflow="hidden">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Box>
  </React.StrictMode>
);
