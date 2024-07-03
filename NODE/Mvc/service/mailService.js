
const nodemailer = require('nodemailer');

const MailService = (email, otp) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "harshad2043@gmail.com",
            pass: "tuhuzyurvhtqaaph"
        }
    })

    const mailOptions = {
        from: "harshad2043@gmail.com",
        to: email,
        subject: "password reset",
        html: `<h1> otp : ${otp}</h1>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }

    });

}


module.exports = MailService