import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cardImg from "../../Assets/card_image/card-img.jpg"
import eduImg from "../../Assets/card_image/education.jpg"
import bookImg from "../../Assets/card_image/book.jpg"
import flower from "../../Assets/jpeg/fundraising2.jpg"
import Cards from "../../components/Cards/Card"
import "./home.css"
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom';
import DownArrow from '../../Assets/png/DownArrow.png'
import TickMark from '../../Assets/png/TickMark.png'
import Shield from '../../Assets/png/shield.png'
import Shield1 from '../../Assets/png/shield1.png'
import Consultancy from '../../Assets/png/consultancy.png'
import Setup from '../../Assets/png/setup.png'
import Social from '../../Assets/png/social-network.png'
import { useSpring, animated } from 'react-spring';
import { Button } from '@mui/material'

const Home = () => {


  const slideInFromLeft = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100%)' }, config: { duration: 1000 } });


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
    {
      images: eduImg,
      title: "Shaheen",
      description: "Request for education",
      rating: "4.0",
      price: "7000 PKR"
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
        alignItems: 'center',
        justifyContent: "space-around"
      }}>
        <NavLink to="login">SignIn</NavLink>
        <NavLink className="sigup-btn" to="signup">SignUp</NavLink>
      </div>} />

      <div id='home' className='main-landing-title'>
        <animated.div style={slideInFromLeft} className='landing-title'>
          <h1>ATIYAH PK</h1>
          <p>"Empowering individuals and communities in pakistan through a dedicated crowdfunding platform, to bridge the financial gap, faster collaboration, and address pressing social causes"</p>
        </animated.div>

        <div className='main-landing-head-btn'>
          <a href="/signup"><button className='landing-head-btn'>Start Compaign</button></a >
          <a href="/signup"><button className='landing-head-btn'>Donate Now</button></a>
        </div>
      </div>

      <div id='how-it-works'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="steps">
          <div className="left-steps">

            <hr className='line' />


            <div className='one' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-1' />
              <h6>Fundraising</h6>
              <p>Atiyah is all about fundrising platform similar to gofund me where any one can create their campaign accoridng to their need and raise fund it is basically for paksitani people.</p>
            </div>
            <div className='two' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-2' />
              <h6>Create a Campaign</h6>
              <p>Just select the purpose of your campaign, write a short description and upload photos. Your campaign will be live within seconds!</p>
            </div>
            <div className='three' style={{ marginBottom: '2rem' }}>
              <img src={DownArrow} alt="arrow" className='arrow1-3' />
              <h6>Fundraise</h6>
              <p>You can fundraise as an individual or you can get family and friends involved too. Share with them via email, Facebook or Twitter. They don't even need an account!</p>
            </div>
            <div className='four' style={{ marginBottom: '2rem' }}>
              <img src={TickMark} alt="arrow" className='tick1' />
              <h6>Get Help from our Team</h6>
              <p>We'll take care of everything - we'll support you every step of the way on your fundraising journey</p>
            </div>
          </div>

          <div className="right-steps">
            <img src={flower} alt="flowerimage" />
          </div>
        </div>
      </div>

      <div className="trust-security">
        <div className="sec1">
          <h5 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Trust & Security</h5>
          <p>We have your back. <br /> With a team dedicated to trust and safety, we've successfully managed fundraisers worldwide for more than a decade. Don't worry about a thing, we've you covered</p>
        </div>
        <div className="sec2">
          <h5 style={{ marginBottom: '2rem', fontSize: '1.4rem' }}>Atiyah Pk has everything you need</h5>
          <div className="sec2-1">
            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Shield} alt="shield" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Donor Protection Guarantee</h6>
              </div>
              <p>Atiyah Pk has the first and only donor guarantee in the industry</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Setup} alt="Setup" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Simple Setup</h6>
              </div>
              <p>You can personlize and share your Campaign in just a few minutes</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Shield1} alt="shield1" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Secure</h6>
              </div>
              <p>Out Trust & Safety works around the clock to protect against fraud</p>
            </div>
          </div>

          <div className="sec2-2">
            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Social} alt="social" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Social Reach</h6>
              </div>
              <p>Harness the power of social media to spread your story and get more support</p>
            </div>

            <div style={{ margin: '25px' }}>
              <div style={{ display: 'flex' }}>
                <img src={Consultancy} alt="consultancy" style={{
                  height: '28px',
                  marginRight: '10px',
                  marginLeft: '-37px'
                }} />
                <h6>Expert Advice</h6>
              </div>
              <p>Our best in class Customer Care Specialists will answer your questions, day or night</p>
            </div>
          </div>

          <Button variant="contained" style={{ background: '#117b34' }}>Start a Campaign</Button>

        </div>
      </div>

      <div id='campaign' className='compaigns'>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '2rem'
        }}>
          <h5>Popular Campaigns</h5>
          <a className='view-all' href="detail"><p>view all</p></a>
        </div>
        <div className='scroll-container'>
          <Cards data={data} />
        </div>

        <br />
        <br />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '2rem'
        }}>
          <h5>Latest Campaigns</h5>
          <a className='view-all' href="detail"><p>view all</p></a>
        </div>
        <div className='scroll-container'>
          <Cards data={data} />
        </div>
      </div>

      <div id='abouts'>
        <Footer />
      </div>

    </div >
  )
}

export default Home
