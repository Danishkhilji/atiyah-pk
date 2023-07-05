import React from "react";
import Logo from '../../Assets/transparent/1.png'
import { Button } from "@mui/material";
import Facebook_bw from '../../Assets/logos/facebook-bw.png'
import Twitter_bw from '../../Assets/logos/twitter-bw.png'
import LinkedIn_bw from '../../Assets/logos/linkedin-bw.png'
import Youtube_bw from '../../Assets/logos/youtube-bw.png'
import Mail from '../../Assets/logos/mail.png'

export default function Footer() {
    return (
        <>
            <div className="block">
                <div className="footer-container">
                    <img src={Logo} alt="logo" className="footer-logo" />
                    <div className="products">
                        <h6>Products</h6>
                        <p>Features <br /> Pricing</p>
                    </div>
                    <div className="resources">
                        <h6>Resources</h6>
                        <p>Blogs <br /> User Guides <br /> Webinars</p>
                    </div>
                    <div className="company">
                        <h6>Company</h6>
                        <p>About <br /> Join Us</p>
                    </div>
                    <div className="subscribe">
                        <h5>Subscribe to our Newsletter</h5>
                        <p>For Product annoucments and exclusive insights</p>
                        <div className="email-group">
                            <div className="email">
                                <img src={Mail} alt="" className="mail-icon"/>
                                <input type="text" id="email" name="email" placeholder="Input your Email" />
                            </div>
                            <Button variant="contained" id="subscribe-btn">Subscribe</Button>
                        </div>
                        <br />
                        <div className="socials">
                            <img src={Twitter_bw} alt="" className="t-logo" />
                            <img src={Facebook_bw} alt="" className="fb-logo" />
                            <img src={LinkedIn_bw} alt="" className="li-logo" />
                            <img src={Youtube_bw} alt="" className="yt-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}