const Donation = require('../models/donation');
const Campaign = require("../models/campaign");
const userModel = require("../models/user");
const tryCatch = require("../utils/tryCatch");
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// exports.GetCampaigns = tryCatch(async (req, res) => {
//     const campaigns = await Campaign.find().populate("user").populate("comments");
//     if (campaigns.length === 0) {
//       res.status(404).json({ success: false, message: "No active campaign found" });
//     }
//     res.status(200).json({ success: true, campaigns: campaigns });
//   });


exports.GetCampaigns = tryCatch(async (req, res) => {
  // Fetch popular campaigns (active campaigns with the highest amountCollected)
  const popularCampaigns = await Campaign.find({ status: "active" })
    .sort({ amountCollected: -1 }) // Sort in descending order of amountCollected
    .limit(4)
    .populate("user")
    .populate("comments");

  const newCampaigns = await Campaign.find({ status: "active" })
    .sort({ createdAt: -1 }) // Sort in descending order of createdAt (latest campaigns first)
    .limit(4)
    .populate("user")
    .populate("comments");

  if (popularCampaigns.length === 0 && newCampaigns.length === 0) {
    res.status(404).json({ success: false, message: "No active campaigns found" });
  }

  // Prepare the response
  const response = {
    success: true,
    popularCampaigns: popularCampaigns,
    newCampaigns: newCampaigns,
  };

  res.status(200).json(response);
});


exports.GetDonatedCampaigns = tryCatch(async (req, res) => {
    const { userId } = req.params; 
    const donations = await Donation.find({ donor: userId }).populate('donor').populate('campaign');
    if (donations.length === 0) {
      return res.status(404).json({ message: 'No campaigns found for the user.' });
    }
  
    res.status(200).json(donations);
  });



exports.DonateNow = tryCatch(async (req, res) => {
  const { campaignId, userId } = req.params;
  console.log(campaignId, userId)

  const { amount, cardToken ,cardHolderName} = req.body;
console.log(amount, cardToken ,cardHolderName)
  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    return res.status(404).json({ success: false,message: 'Campaign not found.' });
  }
  if (!amount || !cardToken || !cardHolderName ) {
    return res.status(404).json({ success: false,message: 'Each field are required.' });
  }


  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found.' });
  }

  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      token: cardToken
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
    payment_method: paymentMethod.id,
    confirm: true,
  });

  if (paymentIntent.status === 'succeeded') {
    const donation = new Donation({
      campaign: campaignId,
      donor: userId,
      amount,
      cardNumber: '**** **** **** ' + paymentMethod.card.last4,
      cardHolderName: cardHolderName,
    });

    await donation.save();
    campaign.donations.push(donation._id);
    await campaign.save();

    res.status(201).json({success: true, message: 'Donation successful.', donation });
  } else {
    res.status(400).json({success: false, message: 'Payment failed.' });
  }
});
