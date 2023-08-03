const express = require('express')
const router = express.Router()
const donorController= require("../controllers/donorController")
const authController= require("../controllers/authController")
const commentController= require("../controllers/commentController")

router.get("/campaigns",donorController.GetCampaigns)
router.get("/donatedcampaign/:userId",donorController.GetDonatedCampaigns)
router.post('/donate/:campaignId/:userId',donorController.DonateNow)
// router.put("/share",donorController)
router.post("/comment/:campaignId",commentController.createComment)


module.exports = router

