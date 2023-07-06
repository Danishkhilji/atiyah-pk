import React from 'react'
import Sidebar from '../../components/Sidebar/drawer'
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import DonorTable from '../../components/AdminTables/donorTable';
const data = [
    {
      name: "Dashboard",
      icon: <HomeOutlinedIcon />,
    },
    { name: "Donors",
     icon: <InboxOutlinedIcon /> ,
     active: true,
     color: '#fff'
    },
    { name: "Client", icon: <CheckBoxOutlineBlankOutlinedIcon /> },
    { name: "Profit", icon: <MailOutlineIcon /> },
    { name: "Setting", icon: <DraftsOutlinedIcon /> },
  ];
  
const DonorList = () => {
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ flex: '0 0 250px', marginRight: '30px' }}>
      <Sidebar data={data} />
    </div>
    <div style={{ flex: 1, padding: '30px' }}>
        <h3>Donors</h3>
        <DonorTable/>
    {/*      <div style={{ marginBottom: '30px' }}>
        <h1>Analytics Overview</h1>
      </div>
      <div style={{ display: 'flex', marginBottom: '30px', gap: '50px' }}>
        <div style={{ flex: 1 }}>
          <AdminBarChart />
        </div>
        <div style={{ flex: 1 }}>
          <AdminLineChart />
        </div>
      </div>
      <div>

        <div style={{ margin: '10 auto' }}>
          <h1 style={{ marginBottom: '30px' }} >On Going Campaign</h1>
          <CampaignTable style={{ width: '100vw' }} />
        </div>
      </div>*/}
    </div> 
  </div>

  )
}

export default DonorList
