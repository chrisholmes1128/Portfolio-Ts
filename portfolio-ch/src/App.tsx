import './App.css'
import { Box } from '@mui/material'
import DashboardPage from './modules/DashboardPage';

function App() {
  return (
    <Box bgcolor="background.default" width="100vw" height="100vh" padding={2}>
      <DashboardPage />
    </Box>
  );
}

export default App
