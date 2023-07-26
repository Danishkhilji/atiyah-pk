import React from 'react'
import "./forgetPassScreen.css"
import TextField from '@mui/material/TextField';
import logo from "../../Assets/transparent/1.png"
const ForgetPassscreens = (props) => {
    return (
        <div className='main-forget-screens'>
            <div className='forget-screens'>
                <div className='forget-screen-content'>
                    <img className='logo' src={logo} alt="atiyah-logo" />

                    <h3>{props.heading}</h3>
                    <TextField
                        className='input-field'
                        required

                        label={props.text}

                    />
                    <div className='input-field'>{props.text2}</div>
                </div>
                <button className='forget-btns'>{props.content}</button>

            </div>

        </div>
    )
}

export default ForgetPassscreens
