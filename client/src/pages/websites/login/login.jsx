import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../../Assets/transparent/1.png"
import googleLogo from '../../../Assets/logos/google.png'
import facebookLogo from '../../../Assets/logos/facebook.png'
import appleLogo from '../../../Assets/logos/apple.png'
import { useNavigate, NavLink } from 'react-router-dom';
import RightPic from '../../../Assets/png/rightpic.jpg'
import { Login } from '../../../request/authAPIS';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/userSlice';
import { loginSuccess } from '../../../store/authSlice';

const defaultTheme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Please fill in both email and password fields.');
            return;
        }
        Login({ email, password }).then((response) => {
            if (response?.data.success === true) {
                let user = response.data.user;
                dispatch(setUser(user));
                dispatch(loginSuccess());
                setError('');
                setTimeout(() => {
                    navigate("/receiverDashboard");
                  }, 1500);
                  }
        });
    };

    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
        setError('');
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    }

    return (
        <>
            <div className='web-body'>
                <div className="left">
                    <ThemeProvider theme={defaultTheme}>
                        <div className="logo-left">
                            <img src={Logo} alt="Atiyah.pk" />
                        </div>
                        <Container component="main" maxWidth="xs" id='box'>
                            <CssBaseline />
                            <Box id='boX'
                                sx={{
                                    marginTop: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <h2 className='hello'>Hello Again!</h2>
                                <p className='hello2'>Enter your credential to access your account</p>
                                <div className="third-party">
                                    <div className="google" style={{ cursor: 'pointer' }}>
                                        <img src={googleLogo} alt='Google' />
                                    </div>
                                    <div className="facebook" style={{ cursor: 'pointer' }}>
                                        <img src={facebookLogo} alt='Facebook' />
                                    </div>
                                </div>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={handleUsernameChange}

                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handlePasswordChange}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    {error && <div className="error-message" style={{
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
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/forget-pass" variant="body2" id='lg-ending'>
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <NavLink to="/signup" id='signUP'>
                                                {"Don't have an account? Sign Up"}
                                            </NavLink>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
                <div className="right">
                    <img src={RightPic} alt='' />
                </div>
            </div >
            <ToastContainer />
        </>
    );
}