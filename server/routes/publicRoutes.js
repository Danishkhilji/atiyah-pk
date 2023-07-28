const express = require('express')
const router = express.Router()
const authController= require("../controllers/authController")

router.post("/login",authController.LogIn)
router.post("/signup",authController.SignUp)
router.post("/SendOTPmail",authController.SendOTPmail)
router.post("/verifyOTP",authController.VerifyOTP)
router.post("/resetPass",authController.UpdatePassword)
router.get("/logout",authController.LogOut)
// router.get("/",authController.Home)

module.exports = router
