import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


const theme = createTheme({
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#00ff00', // change secondary color to green
    },
  },
  // components: {
  //   MuiStepLabel: {
  //     styleOverrides: {
  //       root: {
  //         color: 'white', // change label color to blue
  //       },
  //     },
  //   },
  // },
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       root: {
  //         color: 'white', // change typography color to blue
  //       },
  //     },
  //   },
  // },
});

function getSteps() {
  return [
    "Enter Title",
    "Upload Game Files",
    "Creating Game",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Step1/>
        </>
      );

    case 1:
      return (
        <>
          <Step2/>
        </>
      );
    case 2:
      return (
        <>
          <Step3/>
        </>
      );
    default:
      return "unknown step";
  }
}

const CreateGame = () => {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="createGame">
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel style={{ color: "#f5f5f5" }} {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you are finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
        </>
      )}
    </div>
    </ThemeProvider>
  );
};

export default CreateGame;