import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "./theme";
import { Box } from '@mui/material';
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Box maxHeight="100vh" overflow="hidden">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Box>
  </React.StrictMode>
);
