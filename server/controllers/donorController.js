const Donation = require('../models/donation');
const Campaign = require("../models/campaign");
const userModel = require("../models/user");
const tryCatch = require("../utils/tryCatch");
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


exports.GetCampaigns = tryCatch(async (req, res) => {
    const campaigns = await Campaign.find().populate("user").populate("comments");
    if (campaigns.length === 0) {
      return res.status(404).json({ message: 'No campaigns found.' });
    }
    res.status(200).json(campaigns);
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
  const { amount, cardToken ,cardHolderName} = req.body;

  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    return res.status(404).json({ message: 'Campaign not found.' });
  }

  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
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

    res.status(201).json({ message: 'Donation successful.', donation });
  } else {
    res.status(400).json({ message: 'Payment failed.' });
  }
});
