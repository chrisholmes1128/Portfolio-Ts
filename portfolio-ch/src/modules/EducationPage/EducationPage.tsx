import {
  Box,
  useTheme,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

function EducationPage() {
  const theme = useTheme();
  // await getSkills when apollo is added
  return (
    <Box
      width="100%"
      height="40rem"
      mt={2}
      justifyContent="center"
    >
      <PageTitle title="Education" />
    </Box>
  );
}

export default EducationPage;
