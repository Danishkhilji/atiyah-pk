import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Food from '../../Assets/jpeg/ReqForFood.jpg'
import Button from '@mui/material/Button';
import User from '../../Assets/logos/user.png'
import profileIcon from "../../Assets/logos/user.png"
import searchIcon from "../../Assets/logos/search.png"
import notiIcon from "../../Assets/logos/notification.png"
import { NavLink } from 'react-router-dom';
import { ProgressBar } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Tab } from '@mui/material'
export default function CampaignPage() {
    const raisedAmount = 12645;
    const goalAmount = 130000;
    const progressPercentage = (raisedAmount / goalAmount) * 100;

    return (
        <>
            <Navbar link1={<a href='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} link2={<a href='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} search={<div style={{
                width: "10%",
                display: "flex",
                marginRight: "22px",
                alignItems: "center",
                justifyContent: "space-around"
            }}><img style={{ width: "25px", height: "25px" }} src={notiIcon} alt="noti" /> <img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" /></div>} />

            <div>
                <div className="container-center">
                    <h2 className="campaign-name" style={{ marginLeft: '-3.9rem' }}>Request For Food</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={Food} alt="CampaignImage" className="campaign-image" />
                            <div className="des-com">
                                <div className="description">
                                    <h6>Decription</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, minus nostrum. Velit sunt sint repellendus! Officia ea facilis dolores eaque expedita amet, assumenda voluptate numquam autem distinctio inventore. Veritatis temporibus numquam maxime officiis totam? Sit in, beatae, tempore labore enim similique et, voluptatum voluptates excepturi magni dolores numquam dolorum cumque.</p>
                                </div>
                                <div className="comment-section">
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                    <div className="comment">
                                        <img src={User} alt="" />
                                        <p><b>USER123</b> <br /> Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6 id="progress-data" style={{ margin: "10px auto", fontSize: "15px" }}>
                                    Rs.{raisedAmount} Raised of Rs.{goalAmount}
                                </h6>
                                <ProgressBar now={progressPercentage} className="pgbar" />
                                <br />
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained" style={{ background: "#117b34" }}>Share</Button>
                                <Button variant="contained" style={{ background: "#117b34" }}>Donate Now</Button>
                            </div>
                            <p className="a">1696 people just donated</p>
                            <div className="recent-donations">
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}