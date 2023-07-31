import { Link } from "react-router-dom"
import "./donatebtn.css"
import React from 'react'

const DonateBtn = () => {
    return (
        <Link to="/login">
            <button className="button">
                <p className="text" style={{cursor: 'pointer'}}>Donate Now</p>
            </button>
        </Link>
    )
}

export default DonateBtn
