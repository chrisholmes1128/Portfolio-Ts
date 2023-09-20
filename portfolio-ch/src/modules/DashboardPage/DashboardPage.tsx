import { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import { useLocation } from "react-router-dom";
import downloadFile from "../../utils/downloadFile";
import { RESUME_PDF } from "../constants";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
}

function DashboardPage({ children }: IDashboardPageProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setTitle(capitalizeEveryWord(location.pathname.split("/")[1]));
    } else {
      setTitle("Home");
    }
  }, [location]);

  return (
    <Box display="flex" width="100%">
      <Box>
        <Sidebar
          open={isOpen}
          width="21rem"
          setOpen={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box width="100%" ml={2} mr={2}>
        <Header title={title}>
          <ResumeButton
            variant="outlined"
            onClick={() => downloadFile(RESUME_PDF)}
          >
            Resume
          </ResumeButton>
        </Header>
        {children}
      </Box>
    </Box>
  );
}

export default DashboardPage;
