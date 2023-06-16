import './App.css'
import { Box } from '@mui/material'
import DashboardPage from './modules/DashboardPage';
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider>
      <Box
        bgcolor="background.default"
        width="100vw"
        height="100vh"
      >
        <DashboardPage />
      </Box>
    </ThemeProvider>
  );
}

export default App
