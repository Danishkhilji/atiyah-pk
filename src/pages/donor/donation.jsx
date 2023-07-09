import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import Stack from '@mui/material/Stack';
// import Buttonz from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import img from "../../Assets/jpeg/child.jpg";

// Styled components for custom styles
const DonationContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  padding: theme.spacing(2),
}));

const OptionalTipContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  padding: theme.spacing(2),
  width: '50%',
}));

const RefundContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

export default function CreditCardPage() {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [cardHolderName, setCardHolderName] = React.useState('');
  const [saveCard, setSaveCard] = React.useState(false);
  const [donationAmount, setDonationAmount] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState('');

  const validateCardNumber = () => {
    const cardNumberRegex = /^\d{13}$/;
    return cardNumberRegex.test(cardNumber);
  };

  const validateExpiryDate = () => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    return expiryDateRegex.test(expiryDate);
  };

  const validateCvc = () => {
    const cvcRegex = /^\d{3}$/;
    return cvcRegex.test(cvc);
  };

  const handleAddCard = () => {
    // Perform final validation checks before adding the card
    if (!validateCardNumber()) {
      alert('Please enter a valid 13-digit card number.');
      return;
    }

    if (!validateExpiryDate()) {
      alert('Please enter a valid expiration date (MM/YY).');
      return;
    }

    if (!validateCvc()) {
      alert('Please enter a valid 3-digit CVC.');
      return;
    }

    // Save the data here (You can replace the alert with your saving logic)
    alert('Card added successfully!');
    // Clear the form fields
    setCardNumber('');
    setExpiryDate('');
    setCvc('');
    setCardHolderName('');
    setSaveCard(false);
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const donationAmountValue = parseFloat(donationAmount) || 0;
  const tipAmountValue = parseFloat(tipAmount) || 0;
  const totalAmountDue = donationAmountValue + tipAmountValue;

  const handleDonationAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setDonationAmount(value);
  };

  const handleTipAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setTipAmount(value);
  };

  return (
    <>
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
      <Container maxWidth="sm" sx={{ paddingTop: '2rem' }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              My Donation 
            </Typography>
            <Divider sx={{ marginBottom: '1rem' }} />

            {/* Image with title and subtitle */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={img} alt="Campaign_description" style={{ marginRight: '30px', width: '200px' }} />
              <div>
                <Typography variant="h6" component="div" gutterBottom>
                  <span style={{ color: 'black' }}>You're supporting Faraz Ali</span>
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Your donation will benefit Faraz Ali's Education
                </Typography>
              </div>
            </div>



            {/* Donation container */}
            <DonationContainer>
              <Typography variant="h6" component="div" gutterBottom>
                Enter Your Donation
              </Typography>
              <OutlinedInput
                value={donationAmount}
                onChange={handleDonationAmountChange}
                // placeholder="0.00"
                type="text"
                startAdornment={<Typography variant="body1">PKR</Typography>}
                endAdornment={<Typography variant="body1">00.00</Typography>}
                sx={{ fontWeight: 'bold', borderRadius: '20px', width: '100%' }}
              />
            </DonationContainer>

            {/* Additional text */}
            <Typography variant="subtitle1" component="div" gutterBottom>
              AtyiahPk has a 0% platform fee for organizers. AtyiahPk will continue offering its services thanks to
              donors who will leave an optional amount here.
            </Typography>

            {/* Optional tip container */}
            <OptionalTipContainer>
              {/* Tip amount */}
            <Typography variant="h6" component="div" gutterBottom>
              Support AtiyahPK
            </Typography>

              <OutlinedInput
                value={tipAmount}
                onChange={handleTipAmountChange}
                // placeholder="0.00"
                type="text"
                startAdornment={<Typography variant="body1">PKR</Typography>}
                endAdornment={<Typography variant="body1">00.00</Typography>}
                sx={{ fontWeight: 'bold', borderRadius: '20px', width: '100%' }}
              />
            </OptionalTipContainer>


            {/* Additional text */}
            <Typography variant="subtitle1" component="div" gutterBottom>
              Adding a GoFundMe tip means being a key part of improving the services for donors like you and the
              campaigns you support.
            </Typography>

            {/* Payment details */}
            <div>
              <Typography variant="h6" component="div" gutterBottom>
              <br/>
                Payment Details
              </Typography>
              <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
              <FormLabel>Card number</FormLabel>
              <Input
                endDecorator={<CreditCardIcon />}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234567890123"
                error={!validateCardNumber()}
              />
            </FormControl>

            <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
            <FormLabel>Expiry date</FormLabel>
            <Input
              endDecorator={<CreditCardIcon />}
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              error={!validateExpiryDate()}
            />
          </FormControl>
          <FormControl sx={{ width: '50%', margin: '0 auto', marginBottom: '1rem' }}>
            <FormLabel>CVC/CVV</FormLabel>
            <Input
              endDecorator={<InfoOutlined />}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="123"
              error={!validateCvc()}
            />
          </FormControl>
          <FormControl sx={{ width: '50%', margin: '0 auto' }}>
            <FormLabel>Card holder name</FormLabel>
            <Input
              placeholder="Enter cardholder's full name"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </FormControl>

              <Checkbox
                label="Save card"
                sx={{ marginTop: '1rem' }}
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
              />
            </div>

            {/* Donation summary */}
            <div>
              <Typography variant="h6" component="div" gutterBottom>
                Your Donation
              </Typography>
              <Typography variant="subtitle1" component="div">
                <span style={{ color: 'black', fontWeight: 'bold' }}>Donation Amount:</span>{' '}
                <span style={{ float: 'right', fontWeight: 'bold', color: 'black' }}>
                  {formatCurrency(donationAmountValue)}
                </span>
              </Typography>
              {tipAmountValue > 0 && (
                <Typography variant="subtitle1" component="div">
                  <span style={{ color: 'black', fontWeight: 'bold' }}>Optional Tip:</span>{' '}
                  <span style={{ float: 'right', fontWeight: 'bold', color: 'black' }}>
                    {formatCurrency(tipAmountValue)}
                  </span>
                </Typography>
              )}
              <Typography variant="subtitle1" component="div">
                <span style={{ color: 'black', fontWeight: 'bold' }}>Total Due Today:</span>{' '}
                <span style={{ float: 'right', fontWeight: 'bold', color: 'black' }}>
                  {formatCurrency(totalAmountDue)}
                </span>
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              onClick={handleAddCard}
              disabled={!validateCardNumber() || !validateExpiryDate() || !validateCvc()}
            >
              Donate
            </Button>
          </CardActions>

                {/* Additional text */}

      <Typography variant="subtitle6" component="div" gutterBottom>
        By continuing, you agree with AtyiahPK terms and privacy notice.
        <br />
        <br />
        Certified Charity donations are made to MASTERCARD/VISA, minus processing fees and granted within 15-45 days, subject to its terms.
        <br />
        <br />
        In the unlikely event that there is a problem funding your chosen charity, MASTERCARD/VISA will contact you before reassigning the funds.
        Your donation is typically tax deductible in Pakistan.
      </Typography>



      {/* Refund container */}
      <RefundContainer>
        <Typography variant="subtitle1" component="div" gutterBottom>
          <span style={{ fontWeight: 'bold' }}>GoFundMe protects your donation</span>
          <br />
          We guarantee you a full refund for up to a year in the rare case that fraud occurs.
        </Typography>
      </RefundContainer>
        </Card>
      </Container>
    </>
  );
}
