const express = require('express')
const router = express.Router()
const receiverController= require("../controllers/receiverController")
const authController= require("../controllers/authController")

router.get("/dashbaord",receiverController.RetrieveData)
router.post("/createCampagin",receiverController.CreateCampaign)
router.put("/updateProfile/:id",authController.UpdateProfile)
// router.post("/share",receiverController.ResetPass)
// router.post("/comment",receiverController.Home)
router.post("/logout",authController.LogOut)

module.exports = router

