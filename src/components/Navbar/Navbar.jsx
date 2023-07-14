import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./Navbar.css"
import logo from "../../Assets/transparent/1.png"
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt={logo} />
      <Tabs className='tabs' value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label={props.link1} />
        <Tab label={props.link2} />
        <Tab label={props.link3} />
        <Tab label={props.link4} />
        <Tab label={props.link7} />
      </Tabs>
      <div>
        {props.link5}
      </div>
      <div className='nav-logos'>
        <div>{props.link8}</div>
        <NavLink className='nav-logo'>{props.link10}</NavLink>
        <NavLink className='nav-logo'>{props.link11}</NavLink>
      </div>

    </div>
  )
}

export default Navbar
