const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");


exports.GetCampaign = tryCatch(async (req, res) => {
    const { id } = req.params;
  
    const campaign = await campaignModel.findById(id).populate("user");
  
    if (!campaign) {
      return res.status(404).json({ success: false, message: "Campaign not found" });
    }

    return res.status(200).json({ success: true, data: campaign });
  });

