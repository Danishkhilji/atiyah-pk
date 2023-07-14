import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import React from 'react'
import cardImg from "../../Assets/card image/card-img.jpg"
import eduImg from "../../Assets/card image/education.jpg"
import bookImg from "../../Assets/card image/book.jpg"
import "./donorLanding.css"

const DonorLandingPage = () => {
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
      description: "Request for book",
      rating: "4.7"
    },
    {
      images: eduImg,
      title: "Shaheen",
      description: "Request for education",
      rating: "4.0",
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

  const theme = createTheme();

  const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
  });

  const StyledLogo = styled('img')({
    width: 40,
    height: 40,
    marginRight: 10,
  });

  const StyledTabs = styled(Tabs)({
    flexGrow: 1,
  });

  const StyledSearchBar = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  });

  const StyledSearchInput = styled('input')(({ theme }) => ({
    width: 256,
    height: 36,
    paddingLeft: 34,
    paddingRight: 12,
    fontFamily: 'Mulish',
    fontSize: 14,
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
    border: 'none',
    outline: 'none',
    '&:hover': {
      color: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[200],
    },
    '&:focus': {
      color: theme.palette.grey[400],
      backgroundColor: '#FFFFFF',
    },
    '&:disabled': {
      color: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[200],
    },
  }));

  const StyledSearchIcon = styled(SearchIcon)({
    marginLeft: '4px',
    marginRight: '4px',
    fill: '#171A1F',
  });

  const StyledBellIcon = styled(NotificationsIcon)({
    marginLeft: '8px',
    fill: '#323842',
  });

  const StyledAvatar = styled(Avatar)({
    marginLeft: '8px',
    backgroundColor: '#F9CECF',
  });

  const StyledButton = styled(Button)({
    backgroundColor: green[500],
    color: 'white',
  });

  const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

  function DonorLandingPage() {
    const [value, setValue] = React.useState(0);
    // const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };


    return (
      <div>
        <Navbar link1="Home" link2="My profile" link3="My Donations" link4="Donation History" link7="Support" link8={<div style={{
          width: "230px",
          height: '35px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgb(54, 54, 54)",
          borderRadius: "10px"
        }}>
          <NavLink><input style={{ border: "NONE" }} type='text' placeholder='search' /></NavLink>
          <NavLink ><img style={{ width: "20px", height: "20px" }} src={searchIcon} alt='search' /></NavLink>
        </div>} link10={<img style={{ width: "25px", height: "25px" }} src={notiIcon} alt="noti" />} link11={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />} />
        <div className='new-campaigns'>
          <h4>New Campaigns</h4>
          <Cards data={data} />
          <a className='view-all' href="detail"><p>view all</p></a>
        </div>
        <div className='popular-campaigns'>
          <h4>Popular Campaigns</h4>
          <Cards data={data} />
          <a className='view-all' href="detail"><p>view all</p></a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default DonorLandingPage