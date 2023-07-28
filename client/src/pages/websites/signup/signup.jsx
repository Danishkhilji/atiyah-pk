import {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    SignIn({name ,email,password}).then((response)=>{
      if(response?.data.success === true){
        setTimeout(() => {
          navigate("/login")
      }, 1500);
    }
    })
  };

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
            <Container component="main" maxWidth="xs">
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
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="family-name"
                        onChange={(e)=>{setName(e.target.value)}}
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
                        onChange={(e)=>{setEmail(e.target.value)}}
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
                        onChange={(e)=>{setPassword(e.target.value)}}

                      />
                    </Grid>
                  </Grid>
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
                  <div className="apple">
                    <img src={appleLogo} alt="Apple" />
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