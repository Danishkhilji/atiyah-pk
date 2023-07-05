import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Logo from '../../Assets/logos/1.png'
import Notification from '../../Assets/logos/notification.png'
import UserImg from '../../Assets/logos/user.png'
import DownArrow from '../../Assets/logos/down.png'
import Search from '../../Assets/logos/search.png'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
          <Box sx={{ width: '100%' }} className="navbar2">
            <img src={Logo} alt="Atiyah PK" className="logo-navbar" />
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
              <Tab label="Home" {...a11yProps(0)} className='tab' />
              <Tab label="My Profile" {...a11yProps(1)} />
              <Tab label="My Donations" {...a11yProps(2)} />
              <Tab label="Donation History" {...a11yProps(3)} />
              <Tab label="Support" {...a11yProps(4)} />
            </Tabs>
          </Box>
        </div>
        <div className="right-navbar">
          <div className="search">
            <img src={Search} alt='' className='search-icon' />
            <input type='text' id='text-search' name='text-search' placeholder='Search' />
          </div>
          <img src={Notification} alt='Notification' className='notification-logo' />
          <div className="user">
            <img src={UserImg} alt='user' className='user-img' />
            <img src={DownArrow} alt='' className='down' />
          </div>
        </div>
      </div>
      {/* <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel> */}
    </>
  );
}