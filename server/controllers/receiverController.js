const tryCatch = require("../utils/tryCatch");
const campaignModel = require("../models/campaign");
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




// ###########################################test code##################################


exports.registerUserAndUploadImage = (req, res) => {
  const { name, bio } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'No image provided' });
  }
  const filename = `${uuid.v4()}_${req.file.originalname}`;


  // Create a write stream to Firebase Storage
  const fileStream = bucket.file(filename).createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });


  fileStream.on('error', (error) => {
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  });

  fileStream.on('finish', () => {
    // Set the image file as publicly accessible
    bucket.file(filename).makePublic().then(() => {
      const imageUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
      const userData = { name, bio, imageUrl };
      res.json({ message: 'User registered successfully', user: userData });
    }).catch((error) => {
      res.status(500).json({ error: 'An error occurred while making the image publicly accessible' });
    });
  });

  fileStream.end(req.file.buffer);
};


// exports.CreateCampaign = tryCatch(async (req, res) => {

//   const {
//     user,
//     city,
//     postalCode,
//     category,
//     campaign,
//     description,
//     amountNeeded,
//     accountTitle,
//     accountNumber,
//   } = req.body;
//   const activeCampaign = await campaignModel.findOne({
//     user: user,
//     status: "active",
//   });
// if (activeCampaign) {
//     res.status(400).json({ success: false, message: "Already has an active campaign" });
//     return;
//   }
//   const newCampaign = new campaignModel({
//     user,
//     city,
//     postalCode,
//     category,
//     campaign,
//     description,
//     amountNeeded,
//     accountTitle,
//     accountNumber,
//   });
//   await newCampaign.save();
//   res.status(200).json({ success: false, message: "Already has an active campaign", data:newCampaign });
// });


exports.RetrieveData = tryCatch(async (req, res) => {
  const { id } = req.params;

  const activeCampaign = await campaignModel.findOne({ user: id, status: "active" }).populate("user").populate("comments").populate("user");
  if (!activeCampaign) {
    res.status(404).json({ success: false, message: "No active campaign found" });
    return;
  }

  res.status(200).json({ success: true, activeCampaign: activeCampaign });
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