const express = require('express')
const router = express.Router()
const receiverController= require("../controllers/receiverController")
const authController= require("../controllers/authController")
const commentController= require("../controllers/commentController")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post("/createCampagin",upload.single('image'),receiverController.CreateCampaign)
router.get("/dashbaord/:id",receiverController.RetrieveData)
router.get("/dashbaord/myCampaigns/:id",receiverController.RetrieveAllCampaigns)
router.post("/dashbaord/myCampaigns/:id",receiverController.EndCampaign)
// router.post("/share",receiverController.ResetPass)
router.post("/comment/:campaignId",commentController.createComment)

module.exports = router

