import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Step, StepLabel, Stepper, Typography } from "@mui/material";

const CountryName = [
    {
        value: 'USA',
        label: 'United States of America',
    },
    {
        value: 'Aus',
        label: 'Australia',
    },
    {
        value: 'ENG',
        label: 'English',
    },
    {
        value: 'Spa',
        label: 'Spain',
    },
];

const steps = ['Select Country', 'Who are you Raising for', 'Amount', 'Campaign Details', 'Account Details'];

export default function UploadCampaign() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const renderSection = (step) => {
        switch (step) {
            case 0:
                return (
                    <div className="section1">
                        <section className="section1">
                            <div className="country">
                                <div className="section1-1">
                                    <h6>Where are you located?</h6>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25rem' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                label="Select"
                                                defaultValue="USA"
                                                helperText="Please select your Country"
                                            >
                                                {CountryName.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>
                                    </Box>
                                    <TextField id="outlined-basic" label="Postal Code" variant="outlined" className="postal-code" style={{
                                        marginLeft: '8px'
                                    }} />

                                </div>
                            </div>
                            <div className="section1-2">
                                <h6>What best describes why you're fundraising?</h6>
                                <p>Animals</p>
                                <p>Business</p>
                                <p>Community</p>
                                <p>Competitions</p>
                                <br />
                                <p>Creative</p>
                                <p>Education</p>
                                <p>Emergencies</p>
                                <p>Environment</p>
                                <br />
                                <p>Events</p>
                                <p>Faith</p>
                                <br />
                                {/* <Button variant="contained" id="continue">Continue</Button> */}
                            </div>
                        </section>
                    </div>
                );
            case 1:
                return (
                    <div className="section2">
                        <section className="section2">
                            <h6>Who are you fundraising for?</h6>
                            <div className="section2-1">
                                <p>Yourself</p> <br />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="section2-1">
                                <p>Yourself</p> <br />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="section2-1">
                                <p>Yourself</p> <br />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            {/* <div className="BTN">
                                <Button variant="contained">Back</Button>
                                <Button variant="contained">Continue</Button>
                            </div> */}
                        </section>
                    </div>
                );
            case 2:
                return (
                    <div className="section3">
                        <section className="section3">
                            <p>Amount to be Raised</p>
                            <FormControl sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                            {/* <div className="BTN">
                                <Button variant="contained">Back</Button>
                                <Button variant="contained">Continue</Button>
                            </div> */}
                        </section>
                    </div>
                );
            case 3:
                return (
                    <div className="section4">
                        <section className="section4">
                            <h6>Enter Details about Campaign</h6>
                            <TextField id="outlined-basic" label="Campaign Name" variant="outlined" style={{
                                marginBottom: '2rem'
                            }} />
                            <TextField id="outlined-basic text" label="Campaign Description" variant="outlined" />
                            <p>Max 200 words</p>
                            {/* <div className="BTN">
                                <Button variant="contained">Back</Button>
                                <Button variant="contained">Continue</Button>
                            </div> */}
                        </section>
                    </div>
                );
            case 4:
                return (
                    <div className="section5">
                        <section className="section5">
                            <h6>Please enter your Account Details</h6>
                            <TextField id="outlined-basic" label="Acount Title" variant="outlined" style={{
                                marginBottom: '2rem'
                            }} />
                            <TextField id="outlined-basic" label="Acount Number" variant="outlined" />
                            {/* <div className="BTN">
                                <Button variant="contained">Back</Button>
                                <Button variant="contained">Post Campaign</Button>
                            </div> */}
                        </section>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <section className="form left">
                <section className="stepper">
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Box>
                </section>
                {renderSection(activeStep)}
                <section className="actions">
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                After clicking the finish button, will proceed to campaign page..
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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

                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </section>
            </section>
            <section className="right"></section>
        </>
    );
}
