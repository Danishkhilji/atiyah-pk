import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Scenery from '../../Assets/logos/testImg.jpg'
import Button from '@mui/material/Button';
import User from '../../Assets/logos/user.png'

export default function CampaignPage() {
    return (
        <>
            <Navbar />

            <div style={{
                width: '94rem'
            }}>
                <div className="container-center">
                    <h2 className="campaign-name">Te Shpetojme Baskimin</h2>
                    <div className="container-cen">
                        <div className="image">
                            <img src={Scenery} alt="CampaignImage" className="campaign-image" />
                            <div className="des-com">
                                <div className="description">
                                    <h6>Decription</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam, ea iste, perferendis magnam itaque repellat reiciendis ratione laboriosam nisi minus natus quidem modi possimus architecto esse consequatur numquam inventore exercitationem incidunt rem reprehenderit. Veritatis eaque sapiente, quis odit corrupti odio fugit natus totam? Quibusdam expedita incidunt in, qui blanditiis inventore, magni, deleniti molestiae iure hic minus? Eveniet et quasi placeat, quidem odio ex corrupti molestiae blanditiis cumque, fugit consequatur omnis quo nisi consequuntur nobis sapiente sed dolores eaque ipsum! Dicta hic facilis, natus a voluptatem reiciendis quo nostrum commodi expedita perferendis rerum quidem ea, veritatis, minus debitis sequi iusto esse fugit dolore amet consequatur saepe autem asperiores tempora. Unde quis nemo ea expedita ipsa, odio consequatur rem nam, harum nesciunt mollitia sequi ab itaque voluptates repudiandae. Esse quae id, vitae odit ducimus reprehenderit. Natus, vero vitae odit repudiandae cupiditate molestias! Eveniet aspernatur cumque quos, et libero, voluptates molestias saepe necessitatibus obcaecati ipsam distinctio cupiditate? Sint fugiat obcaecati voluptates neque quo, vel possimus tempore vero quos asperiores reiciendis eos ea beatae quisquam eaque in similique incidunt dolore ad atque nostrum quae soluta? Adipisci quam tempore quo ut dolores nisi exercitationem fugiat, quas nam beatae deserunt? Consectetur eius numquam non repellat!</p>
                                </div>
                            </div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6>$126455 Raised of &130000</h6>
                                <br />
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained">Share</Button>
                                <Button variant="contained">Donate Now</Button>
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
                                <h6>Comments</h6>
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
        </>
    )
}