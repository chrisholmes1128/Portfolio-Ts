import {
  Box,
  useTheme,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

function TrainingsPage() {
  const theme = useTheme();
  // await getSkills when apollo is added
  return (
    <Box
      width="100%"
      height="100%"
      mb={2}
      mt={2}
      justifyContent="center"
    >
      <PageTitle title="Training" />
    </Box>
  );
}

export default TrainingsPage;
