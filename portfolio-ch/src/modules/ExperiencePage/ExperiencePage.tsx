import { Box } from "@mui/material";
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
      <ExperienceList />
    </Box>
  );
}

export default ExperiencePage;
