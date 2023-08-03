import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Tab } from '@mui/material'
const DonorProfile = () => {
    return (
        <div>
            <Navbar link1={<a href='/donor'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} link2={<a href='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} />
            <Footer />
        </div>
    )
}

export default DonorProfile
