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
  console.log(id)
  const campaigns = await campaignModel.find({ user: id }).populate("user").populate("comments");
  if (campaigns.length === 0) {
    res.status(404).json({ success: false, message: "No active campaigns found" });
    return;
  }
  res.status(200).json({ success: true, data: campaigns });
});
