import "./App.css";
import { Box } from "@mui/material";
import { ThemeProvider } from "./theme";
import Pages from "./modules";
import { BrowserRouter } from "react-router-dom";
import { GlobalModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ThemeProvider>
      <Box bgcolor="background.default" width="100vw" height="100vh">
        <GlobalModalProvider>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </GlobalModalProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
