const express = require('express')
const router = express.Router()
const adminController= require("../controllers/adminController")
const authController= require("../controllers/authController")
const commentController= require("../controllers/commentController")

router.get("/dashbaord",adminController.GetAllCampagins)
router.patch("/campaginStatus/:id",adminController.CampaignStatusUpdate)
router.put("/updateProfile/:id",authController.UpdateProfile)
router.post("/comment/:campaignId",commentController.createComment)
router.get("/logout",authController.LogOut)

module.exports = router


