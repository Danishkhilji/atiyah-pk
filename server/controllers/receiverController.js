const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");

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
  } = req.body;
  const activeCampaign = await campaignModel.findOne({
    user: user,
    status: "active",
  });
if (activeCampaign) {
    res.status(400).json({ success: false, message: "Already has an active campaign" });
    return;
  }
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
  });
  await newCampaign.save();
  res.status(200).json({ success: false, message: "Already has an active campaign", data:newCampaign });
});


exports.RetrieveData = tryCatch(async (req, res) => {
  const { id } = req.params;

  const activeCampaign = await campaignModel.findOne({ user: id, status: "active" }).populate("user").populate("comments");
  const allCampaigns = await campaignModel.find({ user: id }).populate("user").populate("comments");

  if (!activeCampaign) {
    res.status(404).json({ success: false, message: "No active campaign found" });
    return;
  }

  res.status(200).json({ success: true, activeCampaign: activeCampaign, allCampaigns: allCampaigns });
});
