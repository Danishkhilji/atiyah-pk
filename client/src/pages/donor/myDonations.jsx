import React, { useEffect, useState } from "react";
import { GetAllCampagins } from "../../request/receiverAPIS";
import DataTable from "../../components/table/table";
import Navbar from '../../components/Navbar/Navbar';
import profileIcon from "../../Assets/logos/user.png";
import { Tab } from '@mui/material';
import { GetDonatedCampaigns } from "../../request/donorAPIs";
import { useSelector } from 'react-redux'
import { formatDate } from "../../lib/dateFunc";
import { Link } from "react-router-dom";
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
  const [donations, setDonations] = useState();
  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    console.log(user._id)
    GetDonatedCampaigns(user._id, "GetDonatedCampaigns")
      .then((response) => {
        console.log(response?.data.donations, "activeCampaign");
        setDonations(response?.data.donations);
      });
  }, []);

  return (
    <div>
      <Navbar
        link1={<Link to='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
        link2={<Link to='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold", marginTop: '10px', fontFamily: 'Cinzel', fontSize: '17px' }} /></Link>}
        search={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />}
      />

      <div style={{ margin: "30px" }}>
        <h1 style={{ marginBottom: "30px", fontFamily: 'Tektur' }}>Donations</h1>
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
