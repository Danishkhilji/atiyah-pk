const Campaign = require('../models/campaign');
const Donation = require('../models/donation');
const campaignModel = require('../models/campaign');

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

exports.GetDonors = tryCatch(async (req, res) => {
  try {
    const donorDetails = await Donation.aggregate([
      {
        $group: {
          _id: "$donor",
          totalAmountDonated: { $sum: "$amount" },
          uniqueCampaigns: { $addToSet: "$campaign" },
          lastDonationDate: { $max: "$date" }, // Calculate the max date as last donation date
          lastDonationAmount: { $last: "$amount" } // Get the last donation amount
        }
      },
      {
        $lookup: {
          from: "users", // Assuming your user collection is named "users"
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          _id: 0,
          userId: "$user._id",
          userName: "$user.name",
          totalAmountDonated: 1,
          totalUniqueCampaigns: { $size: { $ifNull: ["$uniqueCampaigns", []] } }, // Calculate size of uniqueCampaigns array
          lastDonationDate: 1,
          lastDonationAmount: 1
        }
      }
    ]);

    res.status(200).json({ success: true, donorDetails: donorDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving donor details" });
  }
});

exports.GetCampaignCreators = tryCatch(async (req, res) => {
  try {
    const campaignDetails = await campaignModel.aggregate([
      {
        $lookup: {
          from: "users", // Assuming your user collection is named "users"
          localField: "user",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $lookup: {
          from: "donations", // Assuming your donation collection is named "donations"
          localField: "_id",
          foreignField: "campaign",
          as: "donations"
        }
      },
      {
        $project: {
          _id: 0,
          userId: "$user._id",
          userName: "$user.name",
          totalCampaigns: 1,
          totalAmountRaised: { $sum: "$donations.amount" },
          totalCampaignsCreated: { $sum: 1 } // Calculate total campaigns created
        }
      },
      {
        $group: {
          _id: "$userId",
          userName: { $first: "$userName" },
          totalAmountRaised: { $sum: "$totalAmountRaised" },
          totalCampaignsCreated: { $sum: "$totalCampaignsCreated" }
        }
      }
    ]);

    console.log(campaignDetails);
    res.status(200).json({ success: true, campaignDetails: campaignDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving campaign details" });
  }
});
