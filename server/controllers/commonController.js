const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.GetCampaign = tryCatch(async (req, res) => {
    const { id } = req.params;
  
    const campaign = await campaignModel.findById(id).populate("user");
  
    if (!campaign) {
      return res.status(404).json({ success: false, message: "Campaign not found" });
    }

    return res.status(200).json({ success: true, data: campaign });
  });


  exports.UpdatePassword = tryCatch(async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    const userId = req.params.userId;
    console.log(userId ,currentPassword, newPassword, confirmPassword)
  
    if (!currentPassword || !newPassword || !confirmPassword || !userId) {
      res.status(400).json({ success: false, message: "Current password, new password, and confirm password are required" });
      return;
    }
  
    const user = await userModel.findById(userId);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
  
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      res.status(400).json({ success: false, message: "Current password is incorrect" });
      return;
    }
  
    if (newPassword !== confirmPassword) {
      res.status(400).json({ success: false, message: "New password and confirm password do not match" });
      return;
    }
  
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ success: true, message: "Password updated successfully" });
  });
  
  
  
  
  exports.GetCampaign = tryCatch(async (req, res) => {
    const { id } = req.params;
  
    const campaign = await campaignModel.findById(id).populate("user");
  
    if (!campaign) {
      return res.status(404).json({ success: false, message: "Campaign not found" });
    }

    return res.status(200).json({ success: true, data: campaign });
  });


  exports.GetAllCampaigns =  tryCatch(async (req, res) => {
    const campaigns = await campaignModel.find();
    
    if (campaigns.length === 0) {
      res.status(404).json({ success: false, message: "No campaigns found" });
    } else {
      res.status(200).json({ success: true, campaigns: campaigns });
    }
  })