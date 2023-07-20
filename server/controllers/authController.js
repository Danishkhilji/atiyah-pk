const tryCatch = require("../utils/tryCatch");
const sendOTP = require("../utils/sendOTP");
const bcrypt = require("bcrypt");
const userModel = require("../models/user");
const OTP = require("../models/otp");
const createJWT = require("../config/jwt");

const { generateOTP, otpverification } = require("../utils/Otp");

exports.LogIn = tryCatch(async (req, res) => {
  let { name, password } = req.body;
  if (!name || !password) {
    res.status(400).send("Name and Password Required");
    return;
  }

  const user = await userModel.findOne({ name: name });
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401).send("Invalid password");
    return;
  }

  let access_token = createJWT(user.email, user._id, 3600);
  const maxAge = 1000 * 60 * 60 * 24;
  res
    .status(202)
    .cookie("JWT_token", access_token, { maxAge, httpOnly: true })
    .json({
      email: user.email,
      name: user.name,
      _id: user._id,
    });
});

exports.SignUp = tryCatch(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !password || !email || !role) {
    res.status(400).send("Each field required");
    return;
  }

  const existingUser = await userModel.exists({
    $or: [{ email: email }, { name: name }],
  });

  if (existingUser) {
    res.status(409).send("Try with another username or email");
    return;
  }

  const user = new userModel({ name, email, password, role });
  user.password = await bcrypt.hash(user.password, 12);
  await user.save();
  res.send("User added");
  console.log("Record added");
});

exports.LogOut = tryCatch(async (req, res) => {
  res.status(202).clearCookie("JWT_token").send("Logout");
});

exports.UpdateProfile = tryCatch(async (req, res) => {
  const { id } = req.params;
  const { name, profession, location, bio } = req.body;
  const updatedProfile = await userModel.findByIdAndUpdate(
    id,
    { name: name, profession: profession, location: location, bio: bio },
    { new: true }
  );
  if (!updatedProfile) {
    res.status(404).send("User not found");
    return;
  }

  res.status(200).json(updatedProfile);
});

exports.SendOTPmail = tryCatch(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send("Email Required");
    return;
  }

  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const {otp,expirationTime} = generateOTP();


  const newOTP = new OTP({
    user: user._id,
    otp: otp,
    expirationTime: expirationTime,
  });
  sendOTP(email, otp);
  await newOTP.save();
  res.status(200).send("OTP sent successfully");
});


exports.VerifyOTP = tryCatch(async (req, res) => {
  const { email, otp } = req.body;
  if (!otp || !email) {
    res.status(400).send("OTP and Email are required");
    return;
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const storedOTP = await OTP.findOne({ user: user._id }).sort({ createdAt: -1 });
  if (!storedOTP || otp !== storedOTP.otp || storedOTP.expirationTime < Date.now()) {
    res.status(401).send("Invalid OTP");
    return;
  }

  storedOTP.verified = true;
  await storedOTP.save();
  res.status(200).send("OTP verified successfully");
});

exports.UpdatePassword = tryCatch(async (req, res) => {
  const { newPassword, confirmPassword, email } = req.body;

  if (!newPassword || !confirmPassword || !email) {
    res.status(400).send("New password, confirm password, and email are required");
    return;
  }

  if (newPassword !== confirmPassword) {
    res.status(400).send("New password and confirm password do not match");
    return;
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  res.status(200).send("Password updated successfully");
});
