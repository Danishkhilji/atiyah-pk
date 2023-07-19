const express = require('express')
const router = express.Router()
const donorController= require("../controllers/donorController")
const authController= require("../controllers/authController")

router.get("/campaigns",donorController.GetCampaigns)
router.get("/donatedcampaign/:id",donorController.GetDonatedCampaigns)
router.post('/donate/:campaignId/:userId',donorController.DonateNow)
router.put("/updateProfile/:id",authController.UpdateProfile)
// router.put("/share",donorController)
// router.post("/cooment",donorController)
router.post("/logout",authController.LogOut)

module.exports = router
