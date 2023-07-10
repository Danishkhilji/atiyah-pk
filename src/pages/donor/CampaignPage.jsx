import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Scenery from '../../Assets/logos/testImg.jpg'
import Button from '@mui/material/Button';
import profileIcon from "../../Assets/logos/user.png"
import searchIcon from "../../Assets/logos/search.png"
import notiIcon from "../../Assets/logos/notification.png"
import { NavLink } from 'react-router-dom';

export default function CampaignPage() {
    return (
        <>
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

            <div>
                <div className="container-center">
                    <h2 className="campaign-name">Te Shpetojme Baskimin</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={Scenery} alt="CampaignImage" className="campaign-image" />
                            <div className="description">discription</div>
                        </div>
                        <div className="col">
                            <div className="endorsment-sec">
                                <h6>$126455 Raised of &130000</h6>
                                <p>Endorsement Rating</p>
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained">Share</Button>
                                <br />
                                <Button variant="contained">Donate Now</Button>
                            </div>
                            <p>1696 people just donated</p>
                        </div>
                    </div>
                </div>
                <div className="comment-section">
                    <h6>Comments</h6>
                </div>
            </div>
        </>
    )
}