import React from 'react'
import NavbarDonor from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
const DonorLandingPage = () => {
  const data = [
    {
      title: "Shaheen",
      description: "Request for money",
      rating: "4.9",
      price: "5000 PKR"
    },
    {
      title: "Aslam",
      description: "Request for Education",
      rating: "4.9",
      price: "5000 PKR"
    },
    {
      title: "Shaheen",
      description: "Request for money",
      rating: "4.9",
      price: "5000 PKR"
    },
    {
      title: "Shaheen",
      description: "Request for money",
      rating: "4.9",
      price: "5000 PKR"
    },
    {
      title: "Shaheen",
      description: "Request for money",
      rating: "4.9",
      price: "5000 PKR"
    },
  ]
  return (
    <div>
      <NavbarDonor />
      <div>
        <h4>New Campaigns</h4>
        <Cards data={data} />
        <a href="detail"><p>view all</p></a>
      </div>
      <div>
        <h4>Popular Campaigns</h4>
        <Cards data={data} />
        <a href="detail"><p>view all</p></a>
      </div>
      <Footer />
    </div>
  )
}

export default DonorLandingPage