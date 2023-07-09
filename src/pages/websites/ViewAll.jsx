import React from 'react'
import NavbarDonor from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import cardImg from "../../Assets/card image/card-img.jpg"
import eduImg from "../../Assets/card image/education.jpg"
import bookImg from "../../Assets/card image/book.jpg"

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
            <NavbarDonor />
            <h4 style={{ marginLeft: "30px" }}>click Campaigns</h4>
            <div style={{ margin: "30px" }}>
                <Cards data={data} />
            </div>
            <Footer />
        </div>
    )
}

export default ViewAll
