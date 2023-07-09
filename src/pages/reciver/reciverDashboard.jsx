import React from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/AdminTables/CampaignTable";
// import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
// import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AdminBarChart from "../../components/adminGraph/BarChart";
// import AdminLineChart from "../../components/adminGraph/LineChart";
import StatCard from "../../components/statCard/statCard";
import Box from "@mui/material/Box";
import PaymentIcon from "@mui/icons-material/Payment";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CommentBox from "../../components/comments/commentBox";
const data = [
  {
    name: "Dashboard",
    icon: <HomeOutlinedIcon />,
    active: true,
    color: "#fff",
    path: "",
  },
  { name: "My Campaigns", icon: <InboxOutlinedIcon />, path: "" },
];

const ReciverDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 250px", marginRight: "30px" }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, padding: "30px" }}>
        <div style={{display: "flex"}}>
          <div style={{flex: "1 1 auto"}}>
          <div style={{ marginBottom: "30px" }}>
            <h1>Analytics Overview</h1>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  background: "#F2F4FDFF",
                  padding: "10px",
                  borderRadius: "8px",
                  flex: "1 1 auto",
                  minWidth: "100px",
                  maxWidth: "30%",
                  marginBottom: "10px",
                  width: "244px",
                  height: "128px",
                }}
              >
                <StatCard
                  title="Amount needed"
                  count="10,000/-"
                  icon={<PaymentIcon fontSize="large" color="primary" />}
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#F1FBFDFF",
                  borderRadius: "8px",
                  padding: "10px",
                  flex: "1 1 auto",
                  minWidth: "100px",
                  maxWidth: "30%",
                  marginBottom: "10px",
                  width: "244px",
                  height: "128px",
                }}
              >
                <StatCard
                  title="Amount Collected"
                  count="5,000/-"
                  icon={
                    <VolunteerActivismIcon
                      fontSize="large"
                      style={{ color: "green" }}
                    />
                  }
                />
              </Box>
              <Box
                sx={{
                  boxShadow: "100",
                  borderRadius: "8px",
                  backgroundColor: "#F3FCF0FF",
                  padding: "10px",
                  flex: "1 1 auto",
                  width: "244px",
                  height: "128px",
                  minWidth: "100px",
                  maxWidth: "30%",
                  marginBottom: "10px",
                }}
              >
                <StatCard
                  title="Donors"
                  count=" 6"
                  icon={
                    <Diversity1Icon fontSize="large" style={{ color: "red" }} />
                  }
                />
              </Box>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
              width: "100%",
            }}
          >
            <AdminBarChart />
          </div>
          </div>
          <div>
            <h3>Comments</h3>
            <CommentBox/>
          </div>
        </div>
        <div style={{ margin: "10 auto" }}>
          <h1 style={{ marginBottom: "30px" }}>Recent Donation</h1>
          <CampaignTable style={{ width: "100vw" }} />
        </div>
      </div>
    </div>
  );
};

export default ReciverDashboard;
