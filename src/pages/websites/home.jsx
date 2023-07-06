import React from 'react'
import Navbar from '../../components/Navbar/LandingNav'
import mainImg from "../../Assets/landing main image/landing-main-img.jpg"
import Cards from "../../components/Cards/Card"
import "./home.css"
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='main-landing-title'>
        <div className='landing-title'>
          <h1>ATIYAH PK</h1>
          <p>"Empowering individuals and communities in pakistan through a dedicated crowdfunding platform, to bridge the financial gap, faster collaboration, and address pressing social causes"</p>
        </div>

      </div>
      <div className='main-landing-head-btn'>
        <button className='landing-head-btn'>Start Compaign</button>
        <button className='landing-head-btn'>Donate Now</button>
      </div>
      <div className='main-img-container'>
        <img className='main-img' src={mainImg} alt="main-img" />
      </div>
      <div className='compaigns'>
        <h5>Popular Compaigns</h5>
        <div className='popular-cards'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home
