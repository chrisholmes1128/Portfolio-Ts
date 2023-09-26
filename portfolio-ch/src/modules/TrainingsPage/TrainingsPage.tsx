import { Box, useTheme } from "@mui/material";
import Page from "../../components/Page";
import MUIStepper from "../../components/MUIStepper";

function TrainingsPage() {
  const theme = useTheme();

  return (
    <Page>
      <MUIStepper
        steps={[
          "AWS Cloud Practioner",
          "PluralSight TypeScript",
          "PluralSight SQL",
        ]}
      />
    </Page>
  );
}

export default TrainingsPage;
