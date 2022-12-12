import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Text } from '@nextui-org/react';
import { Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const steps = ['Create Template', 'Add Processes', 'Add Fields'];

const Industries = ["All", "IT", "Textile & Apparel", "Retail & E-commerce", "Automobile", "Telecom"]

const Fields = ["Text", "Number", "Date", "Lookup", "Textarea", "Checkbox"]

const Process = ["Process1", "Process2", "Process3"]

const SteperForm = (props) => {
    let form;
    switch (props.activeStep) {
        case 1:
            form = <CreateTemplate />
            break;
        case 2:
            form = <CreateProcesses />
            break;
        case 3:
            form = <CreateFields />
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

const CreateTemplate = () => {
    return (
        <Row className='gy-4'>
            <Col lg={4} md={6}>
                <TextField
                    label="Template Name"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <TextField
                    label="Template Description"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                    <InputLabel color='secondary' id="">Industry Type</InputLabel>
                    <Select
                        labelId=""
                        id=""
                        value=""
                        color='secondary'
                    >
                        {Industries.map((item) => (
                            <MenuItem value="critical"><Text>{item}</Text></MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Col>

        </Row>
    )
}

const CreateProcesses = () => {
    return (
        <Row className='gy-4'>
            <Col md={6}>
                <TextField
                    label="Process Name"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col md={6}>
                <TextField
                    label="Process Details"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
           
            <Col lg={12}>
                <Button color="primary" variant="contained">Add</Button>
            </Col>
        </Row>
    )
}

const CreateFields = () => {
    return (
        <Row className='gy-4'>
           <Col lg={4} md={6}>
                <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                    <InputLabel color='secondary' id="">Process</InputLabel>
                    <Select
                        labelId=""
                        id=""
                        value=""
                        color='secondary'
                    >
                        {Process.map((item) => (
                            <MenuItem value="critical"><Text>{item}</Text></MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Col>
           <Col lg={4} md={6}>
                <TextField
                    label="Field Name"
                    variant='filled'
                    size='small'
                    fullWidth
                    color='secondary'
                />
            </Col>
            <Col lg={4} md={6}>
                <FormControl size='small' variant='filled' sx={{ minWidth: 120, width: "100%" }}>
                    <InputLabel id="">Field Type</InputLabel>
                    <Select
                        labelId=""
                        id=""
                        value=""
                        color='secondary'
                    >
                        {Fields.map((item) => (
                            <MenuItem value="critical"><Text>{item}</Text></MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Col>
            <Col lg={12}>
                <Button color="primary" variant="contained">Add</Button>
            </Col>
        </Row>
    )
}

export default function AddTemplateSteper() {
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
                        Template Created Successfully <TaskAltIcon color='success'/>
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