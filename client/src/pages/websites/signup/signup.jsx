import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../../Assets/transparent/1.png";
import googleLogo from "../../../Assets/logos/google.png";
import facebookLogo from "../../../Assets/logos/facebook.png";
import appleLogo from "../../../Assets/logos/apple.png";
import RightPic from '../../../Assets/png/rightpic.jpg'
import { SignIn } from "../../../request/authAPIS";
import { ToastContainer } from 'react-toastify';

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !radioValue) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    SignIn({ name, email, password })
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
    setError('');
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!emailValue.includes('@')) {
      setError('Invalid email address. Please enter a valid email.');
    } else {
      setError('');
    }
  }

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
    setError('');
  }

  return (
    <>
      <div className="web-body">
        <div className="left">
          <ThemeProvider theme={defaultTheme}>
            <div className="logo-left">
              <img src={Logo} alt="Atiyah.pk" />

              <Grid container justifyContent="flex-end" className="temp">
                <Grid item>
                  <NavLink to="/login">
                    {"Already have an account? Sign in"}
                  </NavLink>
                </Grid>
              </Grid>
            </div>
            <Container component="main" maxWidth="xs" style={{ marginTop: '-30px' }}>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Welcome to the Family</h2>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="text"
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="family-name"
                        onChange={handleUsernameChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="email"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}

                      />
                    </Grid>
                  </Grid>
                  <div className="radio-input" onChange={handleRadioChange}>
                    <input type="radio" id="value-1" name="value-radio" defaultValue="value-1" />
                    <label htmlFor="value-1">Donor</label>
                    <input type="radio" id="value-2" name="value-radio" defaultValue="value-2" />
                    <label htmlFor="value-2">Reciever</label>
                  </div>
                  {error && <div className="error-message" style={{
                    position: 'fixed',
                    color: 'red',
                  }}>{error}</div>}
                  <Button
                    style={{
                      background: "#117b34",
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
                    <img src={googleLogo} alt="Google" />
                  </div>
                  <div className="facebook">
                    <img src={facebookLogo} alt="Facebook" />
                  </div>
                </div>
              </Box>
            </Container>
          </ThemeProvider>

          <div className="ending">
            <p>By Signing up, you agree with the</p>
            <br />
            <p>
              <span>Terms of Use </span>
              <span>& </span>
              <span>Privacy policy</span>
            </p>
          </div>
        </div>
        <div className="right">
          <img src={RightPic} alt='' />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}