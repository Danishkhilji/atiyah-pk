const tryCatch = require("../utils/tryCatch");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const createJWT = require("../utils/createJWT");
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
  res.status(202).cookie("JWT_token", "").send("Logout");
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

  const otp = generateOTP();
  sendOTP(email, otp);

  req.session.otp = otp;
  req.session.userId = user._id;

  res.status(200).send("OTP sent successfully");
});

exports.VerifyOTP = tryCatch(async (req, res) => {
  const { otp } = req.body;
  if (!otp) {
    res.status(400).send("OTP Required");
    return;
  }

  const storedOTP = req.session.otp;
  const userId = req.session.userId;

  if (!storedOTP || !userId) {
    res.status(400).send("Invalid OTP verification request");
    return;
  }

  if (otp !== storedOTP) {
    res.status(401).send("Invalid OTP");
    return;
  }

  const user = await userModel.findById(userId);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  let access_token = createJWT(user.email, user._id, 3600);
  const maxAge = 1000 * 60 * 60 * 24;
  res
    .status(200)
    .cookie("JWT_token", access_token, { maxAge, httpOnly: true })
    .json({
      email: user.email,
      name: user.name,
      _id: user._id,
    });
});

exports.UpdatePassword = tryCatch(async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const { userId } = req.session;

  if (!newPassword || !confirmPassword) {
    res.status(400).send("New password and confirm password are required");
    return;
  }

  if (newPassword !== confirmPassword) {
    res.status(400).send("New password and confirm password do not match");
    return;
  }

  const user = await userModel.findById(userId);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  res.status(200).send("Password updated successfully");
});
