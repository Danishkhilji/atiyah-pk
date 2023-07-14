import React from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/AdminTables/CampaignTable";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import AdminBarChart from "../../components/adminGraph/BarChart";
import StatCard from "../../components/statCard/statCard";
import Box from "@mui/material/Box";
import PaymentIcon from "@mui/icons-material/Payment";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CommentBox from "../../components/comments/commentBox";
import Button from "../../components/button/button";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
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

const Test = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 250px", marginRight: "30px" }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1>Analytics Overview</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                BGcolor="#F3F4F6FF"
                color="#565E6CFF"
                width="230px"
                height="33px"
              >
                <AddIcon /> Create new campaign
              </Button>
              <Button BGcolor="#EB6769FF" color="#FFFFFFFF" height="36px"   >
                <ShareIcon /> Share Campaign
              </Button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex" , flexWrap: "wrap" , justifyContent: "space-between"}}>
              <Box
                  sx={{
                    background: "#F2F4FDFF",
                    padding: "10px",
                    borderRadius: "8px",
                    flex: 1,
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
                    flex: 1,
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
                    flex: 1,
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
                      <Diversity1Icon
                        fontSize="large"
                        style={{ color: "red" }}
                      />
                    }
                  />
                </Box>
              </div>
            </div>
            <div style={{ flex: 1, }}>
            <AdminBarChart />
            </div>
          </div>
          <div style={{margin: '20px',  flex: '0 0 auto'}}> <CommentBox /> </div>
        </div>
        <div style={{ flex: 1 }}>
        <h1 style={{ marginBottom: "30px" }}>Recent Donation</h1>
          <CampaignTable style={{ width: "100vw" }} />
        </div>
      </div>
    </div>
  );
};

export default Test;
