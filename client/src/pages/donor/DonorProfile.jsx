import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import profileIcon from "../../Assets/logos/user.png"
import ProfileSection from '../../components/ProfileSection'
import { NavLink } from 'react-router-dom';
import { GetAllActiveCampagins } from '../../request/donorAPIs'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import logo from "../../Assets/logos/1.png"
import menuIcon from "../../Assets/logos/menu.png"


export default function DonorProfile() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Navbar link1={<a href='/donor'><Tab label="Home" style={{ color: 'black', fontWeight: "bold" }} /></a>} link2={<a href='donor/my-donation'><Tab label="My Donation" style={{ color: 'black', fontWeight: "bold" }} /></a>} search={<div><Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            ><img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" /></Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <NavLink to="/donor/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </NavLink>

                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem style={{ color: "red" }} onClick={handleClose}>Logout</MenuItem>
                    </NavLink>


                </Menu></div>} login={<a href="/donor-profile">Profile</a>} signup={<a href='/'>Logout</a>} />
            < div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#009b36", padding: "50px" }}></div>
            <ProfileSection />

        </>
    )
}