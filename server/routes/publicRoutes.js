const express = require('express')
const router = express.Router()
const authController= require("../controllers/authController")

router.post("/login",authController.LogIn)
router.post("/signup",authController.SignIn)
router.post("/SendOTPmail",authController.SendOTPmail)
router.post("/verifyOTP",authController.VerifyOTP)
router.post("/resetPass",authController.UpdatePassword)
router.get("/",authController.Home)

module.exports = router
