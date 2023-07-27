import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import Fundraising1 from "../../Assets/jpeg/fundraising1.jpg";
// import Fundraising2 from "../../Assets/jpeg/fundraising2.jpg";

const CityName = [
    {
        value: 'Khi',
        label: 'Karachi',
    },
    {
        value: 'Isl',
        label: 'Islamabad',
    },
    {
        value: 'Hyd',
        label: 'Hyderabad',
    },
    {
        value: 'Lhr',
        label: 'Lahore',
    },
];

const steps = ['Select City', 'Who are you Raising for', 'Amount', 'Campaign Details', 'Account Details'];

const options = [
    "Animals", "Business", "Community", "Competitions", "Creative",
    "Education", "Emergencies", "Environment", "Events", "Faith"
];

export default function UploadCampaign() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeSection, setActiveSection] = useState(null);

    // Function to handle option selection
    const handleOptionSelect = (option) => {
        setSelectedOption((prevSelectedOption) =>
            prevSelectedOption === option ? null : option
        );
    };

    // Function to check if an option is selected
    const isOptionSelected = (option) => {
        return selectedOption === option;
    };

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

    const handleSectionActivation = (sectionName) => {
        setActiveSection(sectionName);
    };

    // Function to check if a section is active
    const isSectionActive = (sectionName) => {
        return activeSection === sectionName;
    };

    const renderSection = (step) => {
        switch (step) {
            case 0:
                return (
                    <CSSTransition key={0} classNames="fade" timeout={500}>
                        <div className="section1">
                            <section className="section1">
                                <div className="City">
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
                                                    defaultValue="Khi"
                                                    helperText="Please select your City"
                                                >
                                                    {CityName.map((option) => (
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
                                    <div className="Opt">
                                        {options.map((option) => (
                                            <p
                                                key={option}
                                                className={isOptionSelected(option) ? "activeOption" : ""}
                                                onClick={() => handleOptionSelect(option)}
                                            >
                                                {option}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 1:
                return (
                    <CSSTransition key={1} classNames="fade" timeout={500}>
                        <div className="section2">
                            <section className="section2">
                                <h6>Who are you fundraising for?</h6>
                                <div className={`section2-1 ${isSectionActive("Yourself") ? "activeOption" : ""}`}
                                    onClick={() => handleSectionActivation("Yourself")} >
                                    <p>Yourself</p> <br />
                                    <p>Funds are delivered to your bank account for your own use</p>
                                </div>
                                <div className={`section2-1 ${isSectionActive("Someone else") ? "activeOption" : ""}`}
                                    onClick={() => handleSectionActivation("Someone else")} >
                                    <p>Someone else</p> <br />
                                    <p>You’ll invite a beneficiary to receive funds or distribute them yourself</p>
                                </div>
                                <div className={`section2-1 ${isSectionActive("Charity") ? "activeOption" : ""}`}
                                    onClick={() => handleSectionActivation("Charity")} >
                                    <p>Charity</p> <br />
                                    <p>Funds are delivered to your chosen nonprofit for you</p>
                                </div>
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 2:
                return (
                    <CSSTransition key={2} classNames="fade" timeout={500}>
                        <div className="section3">
                            <section className="section3">
                                <p>Amount to be Raised</p>
                                <FormControl sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                                        label="Amount"
                                    />
                                </FormControl>
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 3:
                return (
                    <CSSTransition key={3} classNames="fade" timeout={500}>
                        <div className="section4">
                            <section className="section4">
                                <h6>Enter Details about Campaign</h6>
                                <TextField id="outlined-basic" label="Campaign Name" variant="outlined" style={{
                                    marginBottom: '2rem'
                                }} />
                                <TextField id="outlined-basic text" label="Campaign Description" variant="outlined" />
                                <p>Max 50 words</p>
                            </section>
                        </div>
                    </CSSTransition>
                );
            case 4:
                return (
                    <CSSTransition key={4} classNames="fade" timeout={500}>
                        <div className="section5">
                            <section className="section5">
                                <h6>Please enter your Account Details</h6>
                                <TextField id="outlined-basic" label="Acount Title" variant="outlined" style={{
                                    marginBottom: '2rem'
                                }} />
                                <TextField id="outlined-basic" label="Acount Number" variant="outlined" />
                            </section>
                        </div>
                    </CSSTransition>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="web-body">
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
                    <TransitionGroup>
                        {renderSection(activeStep)}
                    </TransitionGroup>
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
                <section className="right">
                    <div className="right-text">
                        Embark on your fundraising journey now!
                    </div>
                </section>
            </div>
        </>
    );
}
