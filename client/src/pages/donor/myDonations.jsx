import React, { useEffect, useState } from "react";
import { GetAllCampagins } from "../../request/receiverAPIS";
import DataTable from "../../components/table/table";
import Navbar from '../../components/Navbar/Navbar';
import profileIcon from "../../Assets/logos/user.png";
import { Tab } from '@mui/material';
import { GetDonatedCampaigns } from "../../request/donorAPIs";
import { useSelector } from 'react-redux'
import { formatDate } from "../../lib/dateFunc";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import logo from "../../Assets/logos/1.png"
import menuIcon from "../../Assets/logos/menu.png"
import { NavLink } from "react-router-dom";
const columns = [
  { id: 'campaign', label: 'Campaigns', minWidth: 170 },
  {
    id: 'amountDonated',
    label: 'Amount Donated',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'amountCollected',
    label: 'Amount Collected',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'startDate',
    label: 'Campaign Start Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }, {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const MyDonations = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [donations, setDonations] = useState();
  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    console.log(user._id)
    GetDonatedCampaigns(user?._id, "GetDonatedCampaigns")
      .then((response) => {
        console.log(response?.data.donations, "activeCampaign");
        setDonations(response?.data.donations);
      });
  }, []);

  return (
    <div>
      <Navbar link1={<a href='/donor'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} link2={<a href='donor/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></a>} search={<div><Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      ><img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" /></Button>
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
          <NavLink to="/donor/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </NavLink>

          <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem style={{ color: "red" }} onClick={handleClose}>Logout</MenuItem>
          </NavLink>


        </Menu></div>} />

      <div style={{ margin: "30px" }}>
        <h1 style={{ marginBottom: "30px" }}>Donations</h1>
        {donations && donations.length > 0 ? (
          //   <DataTable columns={columns} rows={donations} style={{ width: "100vw" }} />
          <DataTable columns={columns} rows={donations.map(item => ({
            campaign: item.campaign?.campaign, // Assuming campaign.campaign is the name you want
            amount: item.amount, // Add the amount property
            amountDonated: item.amount,
            amountCollected: item.campaign?.amountCollected, // If this is correct
            startDate: formatDate(item.date),
            status: item.campaign?.status // Check the property name
          }))} style={{ width: "100vw" }} />) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
