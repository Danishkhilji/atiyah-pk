const nodemailer = require("nodemailer");
require('dotenv').config()

const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
  return { otp, expirationTime };
};

const sendOTP = (email, otp) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.mailtrap_username,
        pass: process.env.mailtrap_password,
      },
    });

    const mailOptions = {
      from: process.env.email_address,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

module.exports = { generateOTP, sendOTP};
