// require('dotenv').config();
// const nodemailer = require('nodemailer');

// //step 1
// const transporter = nodemailer.createTransport(
//     {
//         host: "smtp.supersenses.tn",
//         port: 25,
//         secure: false,
//         auth: {
//             user:process.env.USER,
//             pass:process.env.PASS
//         }
//     });

// // step 2
// const mailOptions = {
//     from: "startupsupersenses@gmail.com",
//     to: "montahajomaa4@gmail.com",
//     subject: "test mail",
//     text: "this is a test mail",
//     attachments: [
//         { filename : '',path:''}
//     ]
// };

// //step 3 
// transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//         console.log(err);
//         return;
//     }else{
//         console.log("email sent successfully!");
//     }
    
// })