const Campaign = require('../models/campaign');
const Donation = require('../models/donation');
const  tryCatch  = require('../utils/tryCatch');


exports.CampaignStatusUpdate = tryCatch(async (req, res) => {
  const { id } = req.params;
  const { block } = req.body;

  const campaign = await Campaign.findById(id);
  if (!campaign) {
    return res.status(404).json({ message: 'Campaign not found.' });
  }
  campaign.status = block ? 'block' : 'active';
  campaign.block = block;

  await campaign.save();

  res.status(200).json({ message: `Campaign ${block ? 'blocked' : 'unblocked'} successfully.` });
});


const mongoose = require("mongoose");

// ... (Donation schema definition and model)

exports.GetActiveCampaigns = tryCatch(async (req, res) => {
  try {
    const campaigns = await Campaign.find({ status: "active" })
      .populate("user", "name")
      .populate("comments");

      const activeCampaigns = await Promise.all(campaigns.map(async campaign => {
        // Calculate amountCollected for each campaign by summing up donation amounts
        const donations = await Donation.find({ campaign: campaign._id });
        const amountCollected = donations.reduce((total, donation) => total + donation.amount, 0);
  
        return {
          campaign: campaign.campaign,
          amountNeeded: campaign.amountNeeded,
          amountCollected: amountCollected, // Calculate dynamically
          startDate: campaign.startDate,
          status: campaign.status,
          userName: campaign.user ? campaign.user.name : null
        };
      }));
  
    // Fetch all donation records
    const donations = await Donation.find({ campaign: { $in: campaigns.map(c => c._id) } });

    // Initialize an array to store donations made on each day of the week
    const donationsByDayOfWeek = [0, 0, 0, 0, 0, 0, 0]; // Index 0 represents Sunday, index 1 represents Monday, and so on.

    // Iterate through donations and accumulate amounts by day of the week
    donations.forEach(donation => {
      const dayOfWeek = donation.date.getDay(); // 0 (Sunday) to 6 (Saturday)
      donationsByDayOfWeek[dayOfWeek] += donation.amount;
    });

    res.status(200).json({
      success: true,
      activeCampaigns: activeCampaigns,
      donationsByDayOfWeek: donationsByDayOfWeek
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving active campaigns" });
  }
});

// exports.GetAllCampagins = tryCatch(async (req, res) => {

//   const campaigns = await Campaign.find().populate("user").populate("Donation").populate("comments")

//   res.status(200).json(campaigns);
// });
