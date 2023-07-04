import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Logo from "../../../Assets/transparent/1.png"
import googleLogo from '../../../Assets/logos/google.png'
import facebookLogo from '../../../Assets/logos/facebook.png'
import appleLogo from '../../../Assets/logos/apple.png'

export default function Login() {
    return (
        <>
            <div className="left">
                <div className="logo">
                    <img src={Logo} alt="Atiyah.pk" />
                </div>
                <div className="login-page">
                    <h2>Hello Again!</h2>
                    <p>Enter your credential to access your account</p>
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
                    <Form.Floating className="mb-3 input">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating className='input'>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <div className="bottom">
                        <div className='keep-me-li'>
                            <Form.Check type={"checkbox"} id="checkbox" className='Logged-in' />
                            Keep me Logged In
                        </div>
                        <div className="forgot">
                            Forgot Password?
                        </div>
                    </div>
                    <Button className='btn'>
                        Login
                    </Button>
                </div>
            </div>

            <div className="right"></div>
        </>
    );
}