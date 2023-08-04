const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");
const Donation = require("../models/donation");
const moment = require('moment');
const uuid = require('uuid');
const { bucket } = require('../config/firebaseConfig');

exports.CreateCampaign = tryCatch(async (req, res) => {
  const {
    user,
    city,
    postalCode,
    category,
    campaign,
    description,
    amountNeeded,
    accountTitle,
    accountNumber,
    fundraiseFor
  } = req.body;

  // Check if an active campaign already exists for the user
  // const activeCampaign = await campaignModel.findOne({
  //   user: user,
  //   status: "active",
  // });

  // if (activeCampaign) {
  //   return res.status(400).json({ success: false, message: "Already has an active campaign" });
  // }

  // Handle the file upload
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image provided" });
  }
  const filename = `${uuid.v4()}_${req.file.originalname}`;

  // Create a write stream to Firebase Storage
  const fileStream = bucket.file(filename).createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  fileStream.on('error', (error) => {
    res.status(500).json({ success: false, error: 'An error occurred while uploading the image' });
  });

  fileStream.on('finish', async () => {
    // Set the image file as publicly accessible
    try {
      await bucket.file(filename).makePublic();
    } catch (error) {
      return res.status(500).json({ success: false, error: 'An error occurred while making the image publicly accessible' });
    }

    const ImageURL = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    // Create a new campaign document with image URL
    const newCampaign = new campaignModel({
      user,
      city,
      postalCode,
      category,
      campaign,
      description,
      amountNeeded,
      accountTitle,
      accountNumber,
      fundraiseFor,
      ImageURL, // Save the image URL in the database
    });

    try {
      await newCampaign.save();
    } catch (error) {
      return res.status(500).json({ success: false, error: 'An error occurred while saving the campaign data' });
    }

    res.status(200).json({ success: true, message: "Campaign created successfully", data: newCampaign });
  });

  fileStream.end(req.file.buffer);
});

 // Import the moment library for date manipulation

exports.RetrieveData = tryCatch(async (req, res) => {
  const { id } = req.params;

  const activeCampaign = await campaignModel.findOne({ user: id, status: "active" }).populate("user").populate("comments");
  const donationRecords = await Donation.find({ campaign: activeCampaign._id }).populate('donor').populate('campaign');

  if (!activeCampaign) {
    res.status(404).json({ success: false, message: "No active campaign found" });
    return;
  }

  // Calculate total donation and count unique donors
  let totalDonation = 0;
  const uniqueDonors = new Set();

  const dailyDonation = Array(7).fill(0); // Initialize dailyDonation array with zeros

  donationRecords.forEach(donation => {
    totalDonation += donation.amount;
    uniqueDonors.add(donation.donor._id.toString());

    const donationDayOfWeek = moment(donation.date).day(); // Get the day of the week (0-6)
    dailyDonation[donationDayOfWeek] += donation.amount; // Add donation amount to the corresponding day
  });

  const totalUniqueDonors = uniqueDonors.size;
  res.status(200).json({ 
    success: true, 
    activeCampaign: activeCampaign, 
    donationRecords: donationRecords,
    totalDonation: totalDonation,
    totalUniqueDonors: totalUniqueDonors,
    dailyDonation: dailyDonation // Include the dailyDonation array in the response
  });
});


exports.RetrieveAllCampaigns = tryCatch(async (req, res) => {
  const { id } = req.params;

  const allCampaigns = await campaignModel.find({ user: id }).populate("user").populate("comments");

  if (!allCampaigns) {
    res.status(404).json({ success: false, message: "Campaigns not found" });
    return;
  }

  res.status(200).json({ success: true, allCampaigns: allCampaigns });
});


exports.EndCampaign = tryCatch(
  async (req, res) => {
    const campaignId = req.params.id;
      const campaign = await campaignModel.findById(campaignId);
      if (!campaign) {
        return res.status(404).json({ success: false, message: 'Campaign not found' });
      }
  
      if (campaign.status === 'completed') {
        return res.status(400).json({ success: false, message: 'Campaign is already complete' });
      }
  
      campaign.status = 'completed';
      await campaign.save();
  
      res.status(200).json({ success: true, message: 'Campaign successfully ended', data: campaign });
    }
 )