import { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import { useLocation, useNavigate } from "react-router-dom";
import downloadFile from "../../utils/downloadFile";
import MyResume from "../../../public/Christopher_Holmes_Resume_2023.pdf";
import MobileButtonMenu from "../../components/MobileButtonMenu";
import Toast from "../../components/Toast";
import { useInfoNotification } from "../../utils/notifications";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
  onExit: () => void;
}

function MobileDashboardPage({ children, onExit }: IDashboardPageProps) {
  const [title, setTitle] = useState("Experience");
  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setTitle(capitalizeEveryWord(location.pathname.split("/")[1]));
    } else {
      onExit();
    }
  }, [location]);

  useEffect(() => {
    if (isFirstPageLoad) {
      const intervalId = setInterval(() => {
        setIsFirstPageLoad(false);
        useInfoNotification(
          "Welcome to my interactive Experience list page. Below you can find my previous work experience as well as add your company to list if you'd like!"
        );
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [isFirstPageLoad]);

  return (
    <Box display="flex" width="100%">
      <Toast />
      <Box width="100%">
        <Header title={title}>
          <ResumeButton
            variant="outlined"
            onClick={() => downloadFile(MyResume)}
          >
            Resume
          </ResumeButton>
        </Header>
        <Box height="100%" sx={{ overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mb={2}
        // mr={1}
        bottom={0}
        right={0}
        position="fixed"
      >
        <MobileButtonMenu />
      </Box>
    </Box>
  );
}

export default MobileDashboardPage;
