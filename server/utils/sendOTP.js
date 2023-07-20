const nodemailer = require('nodemailer');
const tryCatch = require("./tryCatch")
require('dotenv').config()

const sendOTP = tryCatch(async(email, otp) =>{

      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false, 
        auth: {
          user: process.env.mailtrapUser,
          pass: process.env.mailtrapPass
        }
      });
  
      const mailOptions = {
        from: 'Danish@example.com', 
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
        html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.messageId);
  })
module.exports = sendOTP;
