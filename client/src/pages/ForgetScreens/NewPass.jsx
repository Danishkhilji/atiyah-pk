import React from 'react'
import TextField from '@mui/material/TextField';
import ForgetPassscreens from '../../components/ForgetPassScreens/ForgetPassscreens'

const NewPass = () => {
    return (
        <div>
            <ForgetPassscreens heading="Change password" text="New password" content="Update" text2={<TextField
                style={{ marginTop: "40px" }}
                className='input-field'
                required
                id="outlined-required"
                label="Confirm password"

            />} />
        </div>
    )
}

export default NewPass
