import React from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/CampaignTable/CampaignTable";
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
  },
  { name: "Inbox", icon: <InboxOutlinedIcon /> },
  { name: "Outbox", icon: <CheckBoxOutlineBlankOutlinedIcon /> },
  { name: "Sent mail", icon: <MailOutlineIcon /> },
  { name: "Draft", icon: <DraftsOutlinedIcon /> },
  { name: "Trash", icon: <ReceiptOutlinedIcon /> },
];

const AdminDashboard = () => {
  return (
    <>
      <div>
        <Sidebar data={data} />
        <div>
          <h1>Analytics Overview</h1>
        </div>
        <div>
        <div style={{ display: 'flex' }}>
            <div>
                <AdminBarChart />
            </div>
            <div>
                <AdminLineChart />
            </div>
            </div>
          <div>
            <CampaignTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;