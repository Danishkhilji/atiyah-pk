import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./LandingNav.css"
import logo from "../../Assets/transparent/1.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt={logo} />
      <Tabs className='tabs' value={value} onChange={handleChange} aria-label="disabled tabs example">

        <select className='drop-btn' name="" id="">
          <option value="">Start A Compaign</option>
        </select>
        <Tab label="Donate" />
        <Tab label="About us" />
        <Tab label="How it Works" />
      </Tabs>
      <div className='navbar-register'>
        <NavLink to="login">Sign in</NavLink>
        <NavLink className="sigup-btn" to="signup">Sign up</NavLink>
      </div>
    </div>
  )
}

export default Navbar
