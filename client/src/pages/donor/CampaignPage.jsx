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

export default function CampaignPage() {
    const raisedAmount = 12645;
    const goalAmount = 130000;
    const progressPercentage = (raisedAmount / goalAmount) * 100;

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
            </div>} link10={<img style={{ width: "25px", height: "25px" }} src={notiIcon} alt="noti" />} link11={<img style={{ width: "35px", height: "35px" }} src={profileIcon} alt="profile" />} />

            <div style={{
                width: '94rem'
            }}>
                <div className="container-center">
                    <h2 className="campaign-name">Request For Food</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={Food} alt="CampaignImage" className="campaign-image" />
                            <div className="des-com">
                                <div className="description">
                                    <h6>Decription</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam, ea iste, perferendis magnam itaque repellat reiciendis ratione laboriosam nisi minus natus quidem modi possimus architecto esse consequatur numquam inventore exercitationem incidunt rem reprehenderit. Veritatis eaque sapiente, quis odit corrupti odio fugit natus totam? Quibusdam expedita incidunt in, qui blanditiis inventore, magni, deleniti molestiae iure hic minus? Eveniet et quasi placeat, quidem odio ex corrupti molestiae blanditiis cumque, fugit consequatur omnis quo nisi consequuntur nobis sapiente sed dolores eaque ipsum! Dicta hic facilis, natus a voluptatem reiciendis quo nostrum commodi expedita perferendis rerum quidem ea, veritatis, minus debitis sequi iusto esse fugit dolore amet consequatur saepe autem asperiores tempora. Unde quis nemo ea expedita ipsa, odio consequatur rem nam, harum nesciunt mollitia sequi ab itaque voluptates repudiandae. Esse quae id, vitae odit ducimus reprehenderit. Natus, vero vitae odit repudiandae cupiditate molestias! Eveniet aspernatur cumque quos, et libero, voluptates molestias saepe necessitatibus obcaecati ipsam distinctio cupiditate? Sint fugiat obcaecati voluptates neque quo, vel possimus tempore vero quos asperiores reiciendis eos ea beatae quisquam eaque in similique incidunt dolore ad atque nostrum quae soluta? Adipisci quam tempore quo ut dolores nisi exercitationem fugiat, quas nam beatae deserunt? Consectetur eius numquam non repellat!</p>
                                </div>
                            </div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6 id="progress-data" style={{ margin: "4px auto", fontSize: "smaller" }}>
                                    Rs.{raisedAmount} Raised of Rs.{goalAmount}
                                </h6>
                                <ProgressBar now={progressPercentage} className="pgbar" />
                                <br />
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained" style={{ background: "#117b34" }}>Share</Button>
                                <Button variant="contained" style={{ background: "#117b34" }}>Donate Now</Button>
                            </div>
                            <p className="a">1696 people just donated <br /> Recent Donations</p>
                            <div className="recent-donations">
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b> <br /> Lorem ipsum dolor</p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b> <br /> Lorem ipsum dolor</p>
                                </div>
                                <div className="donation">
                                    <img src={User} alt="" />
                                    <p><b>USER123</b> <br /> Lorem ipsum dolor</p>
                                </div>
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
                </div>
            </div>
            <Footer />
        </>
    )
}