import { Box, Collapse, Menu, Typography, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

function DashboardPage() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
    </Box>
  );
}

export default DashboardPage;