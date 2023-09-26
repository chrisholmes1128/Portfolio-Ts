import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepButton,
  Typography,
  useTheme,
} from "@mui/material";
import { AWSCloudCertificate } from "../../assets/images";
import Stepper from "@mui/material/Stepper";

interface IStepperProps {
  steps: string[];
  width?: string;
}

function MUIStepper({ steps, width = "50rem" }: IStepperProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" mb={2}>
        <Typography color={theme.palette.common.white}>
          {steps[activeStep]}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        ml="auto"
        mr="auto"
        mb={4}
        sx={{
          background: `url(${AWSCloudCertificate})`,
          backgroundSize: "cover",
          width: "54rem",
          height: "38rem",
        }}
      />

      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{
          width: width,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Typography
                color={
                  index === activeStep
                    ? theme.palette.common.white
                    : theme.palette.navy.dark
                }
              >
                {label}
              </Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <Box display="flex" justifyContent="center" mt={2}>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default MUIStepper;
