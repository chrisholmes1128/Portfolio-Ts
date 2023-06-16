import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();

  return (
    <Box display="flex">
      <Sidebar open={isOpen} width="22rem" setOpen={() => setIsOpen(!isOpen)} />
    </Box>
  );
}

export default DashboardPage;
