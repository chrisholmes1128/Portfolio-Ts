import { Box, Typography } from "@mui/material";
import { ExperienceList } from "./components";

function ExperiencePage() {
  return (
    <Box
      mb={2}
      bgcolor="background.default"
      width="100%"
      height="90vh"
      sx={{ overflowY: "auto" }}
      borderRadius="0.5rem"
    >
      <Box display="flex" justifyContent="center" width="100%" mt={2}>
        <Typography color="common.white" variant="h4">
          Welcome to my interactive Experience list page. Below you can find my
          previous work experience as well as add your company to list if you'd
          like!
        </Typography>
      </Box>
      <ExperienceList />
    </Box>
  );
}

export default ExperiencePage;
