import {
  Box,
  useTheme,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

function PortfolioTechPage() {
  const theme = useTheme();
  // await getSkills when apollo is added
  return (
    <Box
      width="100%"
      height="40rem"
      mt={2}
      justifyContent="center"
    >
      <PageTitle title="Application Tech Stack" />
    </Box>
  );
}

export default PortfolioTechPage;
