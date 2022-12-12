import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from '@nextui-org/react';
import { Form1, Form2, Form3 } from './Forms';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const steps = ['Project Details', 'Customer Details', 'Project Outsourcing'];

const SteperForm = (props) => {
  let form;
  switch (props.activeStep) {
    case 1:
      form = <Form1 />
      break;
    case 2:
      form = <Form2 />
      break;
    case 3:
      form = <Form3 />
      break;
  }

  return (
    <div className='p-4'>
      <Card>
        <Card.Body>
          <form>
            {form}
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default function ProjectWorkflowSteper() {
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
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel{...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Project successfully created <TaskAltIcon color='success'/>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              onClick={handleReset}
              color="primary"
              variant="contained"
            >Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div sx={{ mt: 2, mb: 1 }}>
            {/* Step {activeStep + 1} */}

            <SteperForm activeStep={activeStep + 1} />

          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              color="secondary"
              variant="contained"
            >
              Back
            </Button>

            <Button
              onClick={handleNext}
              color="primary"
              variant="contained"
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}