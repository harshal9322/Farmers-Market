const { model } = require("mongoose");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "harsh932206@gmail.com",
        pass: "yvka jkiu zphw wckj"
    }
});

 async function sendOTP(email, otp){
    const mailOptions = {
         from: "harsh932206@gmail.com",
         to: email,
         subject: "Your OTP code",
         text: `Your OTP code is: ${otp}`
    };
    await transport.sendMail(mailOptions);
    console.log("otp send successfully to",email);
}

module.exports = sendOTP;