import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepButton,
  Typography,
  useTheme,
} from "@mui/material";

import Stepper from "@mui/material/Stepper";

interface IStepperProps {
  activeStep: number;
  children?: React.ReactNode;
  setActiveStep: (value: number) => void;
  steps: string[];
  width?: string;
}

function MUIStepper({
  activeStep,
  setActiveStep,
  children,
  steps,
  width = "50rem",
}: IStepperProps) {
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const theme = useTheme();

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" mt={2}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Typography color={theme.palette.common.white} mr={2} ml={2}>
            {steps[activeStep]}
          </Typography>
          <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mb={2}></Box>

      {children}

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
            <StepButton
              color="inherit"
              onClick={handleStep(index)}
            ></StepButton>
          </Step>
        ))}
      </Stepper>
    </React.Fragment>
  );
}

export default MUIStepper;
