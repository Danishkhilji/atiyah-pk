import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import mainImg from "../../Assets/landing main image/landing-main-img.jpg"
import cardImg from "../../Assets/card image/card-img.jpg"
import eduImg from "../../Assets/card image/education.jpg"
import bookImg from "../../Assets/card image/book.jpg"
import oneIcon from "../../Assets/logos/number-1.png"
import twoIcon from "../../Assets/logos/number-2.png"
import threeIcon from "../../Assets/logos/number-3.png"
import flower from "../../Assets/landing main image/landing flower.png"
import Cards from "../../components/Cards/Card"
import "./home.css"
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom';
import { CardImg } from 'react-bootstrap'
const Home = () => {
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
      rating: "4.8",
      price: "4000 PKR"
    },
    {
      images: bookImg,
      title: "Shaheen",
      description: "Request for book",
      rating: "4.9",
    },
    {
      images: cardImg,
      title: "Shaheen",
      description: "Request for money",
      rating: "4.5",
      price: "10000 PKR"
    },
    {
      images: eduImg,
      title: "Shaheen",
      description: "Request for education",
      rating: "4.0",
      price: "7000 PKR"
    },
  ]
  return (
    <div>
      <Navbar link1="Home" link2="Campaigns" link3="About" link4="How it works" link5={<div style={{
        width: '150px',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: "space-around"
      }}>
        <NavLink to="login">SignIn</NavLink>
        <NavLink className="sigup-btn" to="signup">SignUp</NavLink>
      </div>} />
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
      <div id='how-it-works' className='box-landing-steps'>
        <div>
          <h5>How it works</h5>
          <h2>Fundraising of Atiyah Pk<br />takes just a few minutes</h2>
          <div className='main-landing-page-steps'>
            <div className='landing-page-steps'>
              <img className='digit-icon' src={oneIcon} alt="one icon" />
              <h5>Start with the basics</h5>
              <h6>Kick things off with you name and location.</h6>
            </div>
            <div className='landing-page-steps'>
              <img className='digit-icon' src={twoIcon} alt="two icon" />
              <h5>Tell your story</h5>
              <h6>we'll guide you with tips along the way</h6>
            </div>
            <div className='landing-page-steps'>
              <img className='digit-icon' src={threeIcon} alt="three icon" />
              <h5>Share with friends and family</h5>
              <h6>people out there want to help you</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='landing-trust-msg'>
        <div>
          <h5>Trust and Safety</h5>
          <h4>We have your back.</h4>
          <h4>With a global team dedicated to trust and</h4>
          <h4>safety,we've sucessfully managed fundraisers</h4>
          <h4>worlwide for more than a decade, Don't worry </h4>
          <h4>about a thing, we've got you covered.</h4>
        </div>
      </div>
      <div className='main-landing-started-msg'>
        <div className='landing-started-msg'>
          <div>
            <h4>Ready to get started? join</h4>
            <h4>thousands of others day</h4>
            <button className='Landing-start-btn'>Start Atiyah PK</button>
          </div>
          <div>
            <img className='flower-img' src={flower} alt="flower image" />
          </div>
        </div>
      </div>
      <div className='compaigns'>
        <h5>Popular Compaigns</h5>
        <div  >
          <Cards data={data} />

        </div>
        <a className='view-all' href="detail"><p>view all</p></a>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home
