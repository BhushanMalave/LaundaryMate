import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../../../src/screens/customer_management/VerticalLinearStepper.css";

const steps = [
  {
    label: "Receiving",
    labelcontent: "",
    description1: `Sanjay (LM00123)   `,
    description2: "has received the item.",
  },
  {
    label: "Shift Manager",
    labelcontent: "06-05-2022, 5:15pm",
    description1: `Sanjay (LM00123) `,
    description2: "has been assigned for pickup",
  },
  {
    label: "Order Picked-Up",
    labelcontent: "06-05-2022, 5:15pm",
    description1: `Mahesh (LM00785) `,
    description2: " has processed.r",
  },
  {
    label: "Tagger ",
    labelcontent: "06-05-2022, 5:30pm",
    description1: `Arun (LM00234)  `,
    description2: " has tagged the wash tag . Wash Tag No. 123456",
  },
  {
    label: "Inspector",
    labelcontent: "06-05-2022, 5:45pm",
    description1: `Elzac (LM00614) `,
    description2: " has marked wash programmes.",
  },
  {
    label: "QC",
    labelcontent: "",
    description1: ``,
    description2: "",
  },
  {
    label: "Packer",
    labelcontent: "",
    description1: ``,
    description2: "",
  },
  {
    label: "Dispatch",
    labelcontent: "",
    description1: ``,
    description2: "",
  },
];

export default function TrackItemStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="verticalcontainer">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                <span
                  style={{
                    fontFamily: "Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 14,
                    // lineHeight: 18,
                    color: "#000000",
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontFamily: "Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#808080",
                  }}
                >
                  &nbsp; &nbsp;
                  {step.labelcontent}
                </span>
                <p
                  style={{
                    fontFamily: "Regular",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 11,
                    // lineHeight: 18,
                    color: "#000000",
                  }}
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {step.description1}
                  <span
                    style={{
                      fontFamily: "Regular",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 12,
                      color: "#808080",
                    }}
                  >
                    {step.description2}
                  </span>
                </p>
              </StepLabel>
              <StepContent>
                {/* <Typography>{step.description}</Typography> */}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
