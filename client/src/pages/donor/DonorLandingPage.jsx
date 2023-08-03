import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Card'
import profileIcon from "../../Assets/logos/user.png"
import { Tab } from '@mui/material'
import "./donorLanding.css"
import { useSpring, animated } from 'react-spring';
import { GetAllActiveCampagins } from '../../request/donorAPIs'

const DonorLandingPage = () => {
  
  const slideInFromLeftNew = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-100%)' }, config: { duration: 1000 } });
  const [newCampaigns ,setNewCampaigns] = useState()
  const [popularCampaigns ,setPopularCampaigns] = useState()
  useEffect(()=>{
    GetAllActiveCampagins().then((response)=>{
      setNewCampaigns(response.data.newCampaigns)
      setPopularCampaigns(response.data.popularCampaigns)
    })
  },[])
  return (
    <div>
      <Navbar link1={<a href='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} link2={<a href='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} search={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", backgroundColor: "#009b36", padding: "50px" }}>
        <animated.div style={slideInFromLeftNew} className='donor-landing-title' >
          <h1 >ATIYAH PK</h1>
          <p>Welcome to our Atiyah PK, where you can explore and support a diverse range of impactful campaigns. On our website, you will find two compelling sections: "Popular Campaigns" and "Latest Campaigns."</p>
        </animated.div>
      </div>
      <div className='new-campaigns'>
        <h4>New Campaigns</h4>
        <p>For those who crave fresh opportunities to make a positive impact, our "Latest Campaigns" section is the perfect destination. Here, you'll find a stream of brand-new campaigns, each with a unique mission and story to tell. From empowering individuals in need to fostering innovation and creativity, these campaigns represent the ever-growing tapestry of causes that our community champions. Be among the first to lend your support and witness the incredible potential of these emerging initiatives.</p>
        <a className='view-all' href="detail"><p>view all</p></a>
        <Cards data={newCampaigns} />

      </div>
      <div className='popular-campaigns'>
        <h4>Popular Campaigns</h4>
        <p>In the "Popular Campaigns" section, you'll discover a selection of the most trending and successful fundraising initiatives on our platform. These campaigns have touched the hearts of countless individuals and have garnered widespread support from our caring community. Whether it's a heartwarming story of resilience, a groundbreaking community project, or a life-changing cause, these campaigns have captured the attention of donors who believe in making a difference. Explore these campaigns to witness the power of collective giving and be inspired to contribute to causes that resonate with you.</p>

        <a className='view-all' href="detail"><p>view all</p></a>
        <Cards data={popularCampaigns} />

      </div>
      <Footer />
    </div>
  )
}

export default DonorLandingPage

