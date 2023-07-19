const express = require('express');
const campaignModel = require("../models/campaignModel");
const Donation = require('./donationModel');
const userModel = require("../models/userModel");
const { tryCatch } = require('../util/tryCatch'); 



exports.GetCampaigns = tryCatch(async (req, res) => {
    const campaigns = await Campaign.find();
    if (campaigns.length === 0) {
      return res.status(404).json({ message: 'No campaigns found.' });
    }
    res.status(200).json(campaigns);
  });


exports.GetDonatedCampaigns = tryCatch(async (req, res) => {
    const { userId } = req.params; 

    const campaigns = await campaignModel.find({ donors: userId }).populate('donors');
  
    if (campaigns.length === 0) {
      return res.status(404).json({ message: 'No campaigns found for the user.' });
    }
  
    res.status(200).json(campaigns);
  });



exports.DonateNow =  tryCatch(async (req, res) => {
  const { campaignId, userId } = req.params;
  const { amount, cardNumber, cardName } = req.body;

  const campaign = await campaignModel.findById(campaignId);
  if (!campaign) {
    return res.status(404).json({ message: 'Campaign not found.' });
  }

  const user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Create a new donation
  const donation = new Donation({
    campaign: campaignId,
    donor: userId,
    amount,
    cardNumber,
    cardName,
  });

  await donation.save();
  campaign.donations.push(donation._id);
  await campaign.save();

  res.status(201).json({ message: 'Donation successful.', donation });
});
