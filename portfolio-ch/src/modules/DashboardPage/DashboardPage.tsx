import { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import { useLocation } from "react-router-dom";
import downloadFile from "../../utils/downloadFile";

const ResumeButton = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.primary.main,
}));

interface IDashboardPageProps {
  children: React.ReactNode;
}

function DashboardPage({ children }: IDashboardPageProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("Skills");
  const location = useLocation();

  useEffect(() => {
    if (location) {
      console.log(location.pathname)
      setTitle(capitalizeEveryWord(location.pathname.split("/")[1]));
    }
  }, [location]);

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
        <Header title={title}>
          <ResumeButton
            variant="outlined"
            onClick={() =>
              downloadFile(
                "./src/assets/files/Christopher_Holmes_Resume_2023.pdf"
              )
            }
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
