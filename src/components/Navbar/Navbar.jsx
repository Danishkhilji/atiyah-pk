import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Logo from '../../Assets/transparent/1.png'
import Notification from '../../Assets/logos/notification.png'
import UserImg from '../../Assets/logos/user.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red, green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ReqForFood from '../../Assets/ReqForFood.jpg';


const theme = createTheme();

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
});

const StyledLogo = styled('img')({
  width: 100,
  height: 100,
  marginRight: 10,
});

const StyledTabs = styled(Tabs)({
  flexGrow: 1,
});

const StyledSearchBar = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

const StyledSearchInput = styled('input')(({ theme }) => ({
  width: 256,
  height: 36,
  paddingLeft: 34,
  paddingRight: 12,
  fontFamily: 'Mulish',
  fontSize: 14,
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(1),
  border: 'none',
  outline: 'none',
  '&:hover': {
    color: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[200],
  },
  '&:focus': {
    color: theme.palette.grey[400],
    backgroundColor: '#FFFFFF',
  },
  '&:disabled': {
    color: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[200],
  },
}));

const StyledSearchIcon = styled(SearchIcon)({
  marginLeft: '4px',
  marginRight: '4px',
  fill: '#171A1F',
});

const StyledBellIcon = styled(NotificationsIcon)({
  marginLeft: '8px',
  fill: '#323842',
});

const StyledAvatar = styled(Avatar)({
  marginLeft: '8px',
  backgroundColor: '#F9CECF',
});

const StyledButton = styled(Button)({
  backgroundColor: green[500],
  color: 'white',
});



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NavbarDonor() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <StyledBox>
          <StyledLogo src={Logo} alt="Logo" />
          <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Home" />
            <Tab label="My Profile" />
            <Tab label="My Donations" />
            <Tab label="Donation History" />
            <Tab label="Support" />
          </StyledTabs>
          <StyledSearchBar>
            <StyledSearchInput type="text" placeholder="Search" />
            <StyledSearchIcon />
          </StyledSearchBar>
          <StyledBellIcon />
          <StyledAvatar />
        </StyledBox>
      </Box>

    </ThemeProvider>
  );
}


