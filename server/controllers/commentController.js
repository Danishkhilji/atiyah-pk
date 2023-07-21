const Comment = require("../models/comment");
const Campaign = require("../models/campaign");
const tryCatch = require("../utils/tryCatch");

exports.createComment = tryCatch(async (req, res) => {
  const { campaignId } = req.params;
  const { text, userId } = req.body;

  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    return res.status(404).json({ message: 'Campaign not found.' });
  }
  const comment = new Comment({
    campaign: campaignId,
    text,
    user: userId,
  });
  await comment.save();
  campaign.comments.push(comment);
  await campaign.save();

  res.status(201).json({ message: "Comment added successfully.", comment });
});

