import { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  styled,
  useTheme,
  List,
  ListItem,
  Icon,
  Divider,
  Button,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import SNHU_LOGO from "../../assets/images/Southern_New_Hampshire_University_seal.png";
import GRAVOC_LOGO from "../../assets/images/gravoc_logo.png";
import C2_LOGO from "../../assets/images/c2_logo.png";
import { COURSES } from "../constants";
import { ExpandMore } from "@mui/icons-material";

import { openNewWindow } from "../../utils/openNewWindow";

const LogoContainer = styled("img")(() => ({
  width: "8rem",
  height: "8rem",
  marginLeft: "auto",
  marginRight: "auto",
}));

const LogoContainerRectangle = styled("img")(() => ({
  width: "10rem",
  height: "3.5rem",
  marginLeft: "auto",
  marginRight: "auto",
}));

const GRAVOC_URL = "https://www.gravoc.com/";
const C2_URL = "https://csquaredsystems.com/";

function EducationPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState(false);

  if (!isInitialPageLoad) {
    setTimeout(() => {
      setOpen(true);
      setIsInitialPageLoad(true);
    }, 500);
  }

  // await getCourses when apollo is added
  return (
    <Box
      maxHeight="46.5rem"
      mb={2}
      sx={{ overflowY: "auto" }}
      borderRadius="0.5rem"
    >
      <Box display="flex" width="100vh" mt={2}>
        <PageTitle title="Experience" />
      </Box>
      <Box display="flex" justifyContent="center" width="100%">
        <Button
          onClick={() => openNewWindow(GRAVOC_URL)}
          sx={{ height: "4rem" }}
        >
          <LogoContainer alt="logo" src={GRAVOC_LOGO} />
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mt={1}>
        <Typography color="common.white" variant="h5">
          May 2022 - Current
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" width="100%" mt={2}>
        <Button
          onClick={() => openNewWindow(C2_URL)}
          sx={{ height: "5rem" }}
        >
          <LogoContainerRectangle alt="logo" src={C2_LOGO} />
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mt={1}>
        <Typography color="common.white" variant="h5">
          June 2021 - May 2022
        </Typography>
      </Box>

      <Box display="flex" width="100%" mt={2}>
        <PageTitle title="Education" />
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mt={1}>
        <LogoContainer alt="logo" src={SNHU_LOGO} />
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mt={1}>
        <Typography color="common.white" variant="h5">
          Bachelor of Science in Computer Science - 2021
        </Typography>
      </Box>
      <Box width="100%" mt={2}>
        <Accordion
          expanded={open}
          sx={{ backgroundColor: theme.palette.navy.dark }}
          onClick={() => setOpen(!open)}
        >
          <AccordionSummary
            expandIcon={
              <Icon sx={{ color: theme.palette.common.white }}>
                <ExpandMore />
              </Icon>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" color="common.white">
              Relevant Courses
            </Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: theme.palette.common.white }} />
          <AccordionDetails>
            <List>
              {COURSES.map((course) => (
                <ListItem>
                  <Typography color="common.white">- {course}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default EducationPage;
