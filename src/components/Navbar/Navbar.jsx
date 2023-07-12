import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./Navbar.css"
import logo from "../../Assets/transparent/1.png"
import menuIcon from "../../Assets/logos/menu.png"
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt={logo} />
      <div className='desk-tab'>
        <Tabs className='tabs' value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab activeClassName="active" href="#home" label={props.link1} />
          <Tab activeClassName="active" href="#campaign" label={props.link2} />
          <Tab activeClassName="active" href="#abouts" label={props.link3} />
          <Tab activeClassName="active" href="#how-it-works" label={props.link4} />
          <Tab label={props.link7} />
        </Tabs>
      </div>
      <div className='responsive-tab'>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img className='menu-logo' src={menuIcon} alt="menu" />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>{props.link1}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link2}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link3}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link4}</MenuItem>
          <MenuItem onClick={handleClose}>{props.link7}</MenuItem>
        </Menu>
      </div>
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
