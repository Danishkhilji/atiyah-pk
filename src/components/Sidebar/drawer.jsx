import React from 'react'
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';  
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
  

const Sidebar = ({data}) => {
    const [open, setOpen] = useState(false);

    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );

  return (
<>
<Button onClick={() => setOpen(true)}><KeyboardArrowRightIcon /></Button>
  <Drawer
    open={open}
    anchor={"left"}
    onClose={() => setOpen(false)}
  >
    {getList()}
    <Divider />
    {getList()}
  </Drawer>
</>
  )
}

export default Sidebar
