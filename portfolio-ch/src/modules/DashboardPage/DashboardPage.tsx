import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();

  return (
    <Box display="flex">
      <Box>
        <Sidebar
          open={isOpen}
          width="22rem"
          setOpen={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box width="100%" ml={2} mr={4}>
        <Header />
      </Box>
    </Box>
  );
}

export default DashboardPage;
