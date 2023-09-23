import { Box, useTheme } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Page from "../../components/Page";

function AboutPage() {
  const theme = useTheme();
  // await getSkills when apollo is added
  return (
    <Page>
      <PageTitle title="About Me" />
    </Page>
  );
}

export default AboutPage;
