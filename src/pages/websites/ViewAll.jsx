import React from 'react'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import cardImg from "../../Assets/card image/card-img.jpg"
import eduImg from "../../Assets/card image/education.jpg"
import bookImg from "../../Assets/card image/book.jpg"
import Navbar from '../../components/Navbar/Navbar'
import searchIcon from "../../Assets/logos/search.png"
import notiIcon from "../../Assets/logos/notification.png"
import profileIcon from "../../Assets/logos/user.png"
import { NavLink } from 'react-router-dom';

const ViewAll = () => {
    const data = [
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Aslam",
            description: "Request for Education",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: bookImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: eduImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
        {
            images: cardImg,
            title: "Shaheen",
            description: "Request for money",
            rating: "4.9",
            price: "5000 PKR"
        },
    ]
    return (
        <div>
            <Navbar link1="Home" link2="My profile" link3="My Donations" link4="Donation History" link7="Support" link8={<div style={{
                width: "230px",
                height: '35px',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid rgb(54, 54, 54)",
                borderRadius: "10px"
            }}>
                <NavLink><input style={{ border: "NONE" }} type='text' placeholder='search' /></NavLink>
                <NavLink ><img style={{ width: "20px", height: "20px" }} src={searchIcon} alt='search' /></NavLink>
            </div>} link10={<img style={{ width: "25px", height: "25px" }} src={notiIcon} alt="noti" />} link11={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />} />
            <h4 style={{ marginLeft: "30px" }}>click Campaigns</h4>
            <div style={{ margin: "30px" }}>
                <Cards data={data} />
            </div>
            <Footer />
        </div>
    )
}

export default ViewAll
