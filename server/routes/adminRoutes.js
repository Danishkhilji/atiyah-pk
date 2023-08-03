const express = require('express')
const router = express.Router()
const adminController= require("../controllers/adminController")
const commentController= require("../controllers/commentController")

router.get("/dashbaord",adminController.GetAllCampagins)
router.patch("/campaginStatus/:id",adminController.CampaignStatusUpdate)

router.post("/comment/:campaignId",commentController.createComment)

module.exports = router


