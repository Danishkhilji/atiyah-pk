import React from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/AdminTables/CampaignTable";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AdminBarChart from "../../components/adminGraph/BarChart";
import AdminLineChart from "../../components/adminGraph/LineChart";

const data = [
  {
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
    active: true,
    color: '#fff',
    path: ""
  },
  { name: "My Campaigns", icon: <InboxOutlinedIcon />, path: "" },
];

const ReciverDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1>Analytics Overview</h1>
        </div>
        <div style={{ display: 'flex', marginBottom: '30px', width: "100%" }}>
            <AdminBarChart />
        </div>
        <div>

          <div style={{ margin: '10 auto' }}>
            <h1 style={{ marginBottom: '30px' }} >Recent Donation</h1>
            <CampaignTable style={{ width: '100vw' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReciverDashboard;