import { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import { useLocation } from "react-router-dom";
import downloadFile from "../../utils/downloadFile";
import MyResume from "../../../public/Christopher_Holmes_Resume_2023.pdf";
import MobileDashboardPage from "../MobileDashboardPage";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
  isMobile: boolean;
  onExit: () => void;
}

function DashboardPage({ children, isMobile, onExit }: IDashboardPageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);
  const [title, setTitle] = useState("Experience");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setTitle(capitalizeEveryWord(location.pathname.split("/")[1]));
    } else {
      onExit();
    }
  }, [location]);

  if (isMobile) {
    return <MobileDashboardPage children={children} onExit={onExit} />;
  }

  useEffect(() => {
    if (isFirstPageLoad) {
      const intervalId = setInterval(() => {
        setIsOpen(true);
        setIsFirstPageLoad(false);
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [isFirstPageLoad]);

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
            onClick={() => downloadFile(MyResume)}
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
