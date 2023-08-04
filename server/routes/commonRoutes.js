const express = require('express')
const router = express.Router()

const commonController= require("../controllers/commonController")
const authController= require("../controllers/authController")

router.get("/campaign/:id",commonController.GetCampaign)
router.put("/updateProfile/:id",authController.UpdateProfile)
router.post("/updatePassword/:userId",commonController.UpdatePassword)
module.exports = router
