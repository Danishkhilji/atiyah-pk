import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Scenery from '../../Assets/logos/testImg.jpg'
import Button from '@mui/material/Button';

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
                            <div className="description">discription</div>
                        </div>
                        <div id="col">
                            <div className="endorsment-sec">
                                <h6>$126455 Raised of &130000</h6>
                                <p>Endorsement Rating</p>
                            </div>
                            <div className="endorsement-btn">
                                <Button variant="contained">Share</Button>
                                <Button variant="contained">Donate Now</Button>
                            </div>
                            <p>1696 people just donated</p>
                            <div className="recent-donations">
                                recent donations to be showed here later.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-section">
                    <h6>Comments</h6>
                    comments section.
                </div>
            </div>
        </>
    )
}