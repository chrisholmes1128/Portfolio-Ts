import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

function DashboardPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box display="flex" width="100%">
      <Box>
        <Sidebar
          open={isOpen}
          width="22rem"
          setOpen={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box width="100%" ml={2} mr={4}>
        <Header />
        <PageTitle />
      </Box>
    </Box>
  );
}

export default DashboardPage;
