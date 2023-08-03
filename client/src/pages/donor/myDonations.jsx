import React, { useEffect, useState } from "react";
import { GetAllCampagins } from "../../request/receiverAPIS";
import DataTable from "../../components/table/table";
import Navbar from '../../components/Navbar/Navbar';
import profileIcon from "../../Assets/logos/user.png";
import { Tab } from '@mui/material';
import { GetDonatedCampaigns } from "../../request/donorAPIs";
import { useSelector } from 'react-redux'
const columns = [
    { id: 'campaign', label: 'Campaigns', minWidth: 170 },
    {
      id: 'Endorsement',
      label: 'Endorsement',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
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
    },{
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
  ];

const MyDonations = () => {
  const [campaigns, setCampaigns] = useState();
  const user = useSelector((state) => state.user.user);   


  useEffect(() => {
    console.log(user._id)
    GetDonatedCampaigns(user._id,"GetDonatedCampaigns")
      .then((response) => {
        console.log(response?.data.donations, "activeCampaign");
        setCampaigns(response?.data.donations);
      });
  }, []);

  return (
    <div>
      <Navbar
        link1={<a href='/'><Tab label="Home" style={{ color: '#117b34', fontWeight: "bold" }} /></a>}
        link2={<a href='/my-donation'><Tab label="My Donation" style={{ color: '#117b34', fontWeight: "bold" }} /></a>}
        search={<img style={{ width: "25px", height: "25px" }} src={profileIcon} alt="profile" />}
      />

      <div style={{ margin: "30px" }}>
        <h1 style={{ marginBottom: "30px" }}>Campaigns</h1>
        {campaigns && campaigns.length > 0 ? (
          <DataTable columns={columns} rows={campaigns} style={{ width: "100vw" }} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
