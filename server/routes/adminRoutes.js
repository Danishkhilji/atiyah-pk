const express = require('express')
const router = express.Router()
const adminController= require("../controllers/authController")
const authController= require("../controllers/authController")

router.get("/dashbaord",adminController.GetAllCampagins)
router.patch("/campaginBlock/:id",adminController.CampaignStatusUpdate)
router.put("/updateProfile:id",authController.UpdateProfile)
// router.post("/comment",adminController)
router.post("/logout",authController.LogOut)

module.exports = router


