import { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import { useLocation, useNavigate } from "react-router-dom";
import downloadFile from "../../utils/downloadFile";
import { RESUME_PDF } from "../constants";
import MobileButtonMenu from "../../components/MobileButtonMenu";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
}

function MobileDashboardPage({ children }: IDashboardPageProps) {
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
      <Box width="100%">
        <Header title={title}>
          <ResumeButton
            variant="outlined"
            onClick={() => downloadFile(RESUME_PDF)}
          >
            Resume
          </ResumeButton>
        </Header>
        <Box height="95vh" sx={{ overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        mb={2}
        mr={1}
        bottom={0}
        right={0}
        position="absolute"
      >
        <MobileButtonMenu />
      </Box>
    </Box>
  );
}

export default MobileDashboardPage;
