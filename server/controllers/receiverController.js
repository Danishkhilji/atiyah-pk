const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");

exports.CreateCampaign = tryCatch(async (req, res) => {
  const { campaign, description, amountNeeded, user } = req.body;

  const activeCampaign = await campaignModel.findOne({
    user: user,
    status: "active",
  });

  if (activeCampaign) {
    res.status(400).send("User already has an active campaign");
    return;
  }

  const newCampaign = new campaignModel({
    campaign: campaign,
    description: description,
    amountNeeded: amountNeeded,
    user: user,
  });

  await newCampaign.save();
  res.status(200).json(newCampaign);
});


exports.RetrieveData = tryCatch(async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const campaigns = await campaignModel.find({ user: id }).populate("user");
  console.log(campaigns)
  if (campaigns.length === 0) {
    res.status(404).send("No campaigns found for the user");
    return;
  }

  res.status(200).json(campaigns);
});
