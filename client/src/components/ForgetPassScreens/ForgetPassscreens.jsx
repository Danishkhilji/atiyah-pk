import React, { useState } from 'react';
import './forgetPassScreen.css';
import TextField from '@mui/material/TextField';
import logo from '../../Assets/transparent/1.png';
import icon from '../../Assets/logos/lock.png';
import { ForgetPassword } from '../../request/authAPIS';
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassscreens = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (email === '') {
      // Display an error message.
      const errorText = 'Please enter your email address.';
      setError(errorText);
    } else {
      // Send a password reset email to the user.
      console.log(email,"responce")
      ForgetPassword({"email": email})
    }
  };

  return (
    <div className='main-forget-screens'>
      <div className='forget-screens'>
        <div className='forget-screen-content'>
          <img className='logo' src={logo} alt="atiyah-logo" />
          <img className='icon' src={icon} alt="lock-icon" />
          <h3>{props.heading}</h3>
          <TextField
            className='input-field'
            required
            id="outlined-required"
            label={props.text}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={error}
          />
          <div className='input-field'>{props.text2}</div>
       </div>
        <button className='forget-btns' onClick={handleSubmit}>{props.content}</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassscreens;