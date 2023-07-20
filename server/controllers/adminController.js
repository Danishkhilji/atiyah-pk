const Campaign = require('../models/campaign');
const  tryCatch  = require('../utils/tryCatch');


exports.CampaignStatusUpdate =  tryCatch(async (req, res) => {
    const { id } = req.params;
    const { block } = req.body;
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found.' });
    }
  
    campaign.block = block;
    await campaign.save();
  
    res.status(200).json({ message: `Campaign ${block ? 'blocked' : 'unblocked'} successfully.` });
  });


exports.GetAllCampagins = tryCatch(async (req, res) => {
    const user = req.user;
  if (!user || !user.role === "admin") {
    return res.status(403).json({ message: 'Unauthorized. Admin access only.' });
  }

  const campaigns = await Campaign.find();

  res.status(200).json(campaigns);
});
