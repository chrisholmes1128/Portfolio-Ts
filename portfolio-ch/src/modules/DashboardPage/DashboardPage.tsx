import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
}

function DashboardPage({ children }: IDashboardPageProps) {
  const [isOpen, setIsOpen] = useState(true);

  const downloadResume = () => {
    console.log("download");
  };

  return (
    <Box display="flex" width="100%">
      <Box>
        <Sidebar
          open={isOpen}
          width="22rem"
          setOpen={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box width="100%" ml={2} mr={2}>
        <Header title="Welcome to my Portfolio!">
          <ResumeButton variant="outlined" onClick={() => downloadResume()}>
            Resume
          </ResumeButton>
        </Header>
        {children}
      </Box>
    </Box>
  );
}

export default DashboardPage;
