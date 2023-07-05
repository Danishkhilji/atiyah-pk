import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../../Assets/transparent/1.png"
import googleLogo from '../../../Assets/logos/google.png'
import facebookLogo from '../../../Assets/logos/facebook.png'
import appleLogo from '../../../Assets/logos/apple.png'

const defaultTheme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <div className="left">
                <ThemeProvider theme={defaultTheme}>
                    <div className="logo-left">
                        <img src={Logo} alt="Atiyah.pk" />

                        <Grid container justifyContent="flex-end" className='temp'>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <h2>Welcome to the Family</h2>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="fullName"
                                            label="Full Name"
                                            name="fullName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    style={{
                                        background: "#EB6769FF",
                                    }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </Box>
                            <p>Or sign up with</p>
                            <div className="third-party">
                                <div className="google">
                                    <img src={googleLogo} alt='Google' />
                                </div>
                                <div className="facebook">
                                    <img src={facebookLogo} alt='Facebook' />
                                </div>
                                <div className="apple">
                                    <img src={appleLogo} alt='Apple' />
                                </div>
                            </div>
                        </Box>
                    </Container>
                </ThemeProvider>
                <div className='ending'>
                    <p>By Signing up, you agree with the</p>
                    <br />
                    <p>
                        <span>Terms of Use </span>
                        <span>& </span>
                        <span>Privacy policy</span>
                    </p>
                </div>
            </div>
            <div className="right"></div>
        </>
    );
}