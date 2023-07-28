const express = require('express')
const router = express.Router()
const receiverController= require("../controllers/receiverController")
const authController= require("../controllers/authController")
const commentController= require("../controllers/commentController")

router.get("/dashbaord/:id",receiverController.RetrieveData)
router.post("/createCampagin",receiverController.CreateCampaign)
router.put("/updateProfile/:id",authController.UpdateProfile)
// router.post("/share",receiverController.ResetPass)
router.post("/comment/:campaignId",commentController.createComment)

module.exports = router

