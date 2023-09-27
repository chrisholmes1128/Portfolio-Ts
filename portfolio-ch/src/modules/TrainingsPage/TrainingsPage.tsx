import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Page from "../../components/Page";
import MUIStepper from "../../components/MUIStepper";

import {
  AWSCloudCertificate,
  TypeScriptCertificate,
  SQLCertificate,
} from "../../assets/images";

function TrainingsPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeImage, setActiveImage] = useState(AWSCloudCertificate);

  useEffect(() => {
    if (activeStep === 0) {
      setActiveImage(AWSCloudCertificate);
    }
    if (activeStep === 1) {
      setActiveImage(TypeScriptCertificate);
    }
    if (activeStep === 2) {
      setActiveImage(SQLCertificate);
    }
  }, [activeStep]);

  return (
    <Page>
      <MUIStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        children={
          <Box
            display="flex"
            justifyContent="center"
            ml="auto"
            mr="auto"
            mb={4}
            sx={{
              background: `url(${activeImage})`,
              backgroundSize: "cover",
              width: "54rem",
              height: "38rem",
            }}
          />
        }
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
