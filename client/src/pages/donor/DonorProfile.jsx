import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import profileIcon from "../../Assets/logos/user.png"
import ProfileSection from '../../components/ProfileSection'

export default function DonorProfile() {
    return (
        <>
            <div>
                <Navbar link1={<Link to='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></Link>} link2={<Link to='my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></Link>} search={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />} />
            </div>
            <div>
                <ProfileSection />
            </div>
        </>
    )
}