import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Page from "../../components/Page";
import MUIStepper from "../../components/MUIStepper";

import {
  AWSCloudCertificate,
  TypeScriptCertificate,
  SQLCertificate,
} from "../../assets/images";
import { isCurrentDeviceMobile } from "../../utils/isCurrentDeviceMobile";

function TrainingsPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeImage, setActiveImage] = useState(AWSCloudCertificate);

  const isMobile = isCurrentDeviceMobile();

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

  const imageHeight = isMobile ? "18rem" : "38rem";
  const imageWidth = isMobile ? "99%" : "54rem";

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
              width: imageWidth,
              height: imageHeight,
            }}
          />
        }
        width={isMobile ? "20rem" : "50rem"}
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
