const express = require('express')
const router = express.Router()

const commonController= require("../controllers/commonController")

router.get("/campaign/:id",commonController.GetCampaign)

module.exports = router