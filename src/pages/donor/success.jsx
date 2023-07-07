import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/joy/Typography';
import Container from '@mui/material/Container';

function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Back
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function CreditCardPage() {
  // Rest of the code...

  return (
    <>
      <Navbar />

      {/* Rest of the code... */}
    </>
  );
}
