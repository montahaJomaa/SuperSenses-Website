// const mailer = require("nodemailer");

// const getEmailData = (to, form, template) => {
//     let data = null;
//     switch (template) {
//         case radio.value == "stage":
//             data = {
//                 from: {emailCandidat},
//                 to,
//                 subject:"Demande de",
//                 html: Hello()
//             }
//             break;
//         case radio.value == "stage":
//             data = {
//                 from: { emailCandidat },
//                 to,
//                 subject: Demande,
//                 html: Hello()
//             }
//             break;
//         default:
//             data;


//     }
//     return data;
// }

// const sendEmail = (to, form, type) => {

//     const smtpTransport = mailer.createTransport(
//         {

//             service: "Gmail",
//             host:"smtp.supersenses.tn",
//             port:25,
//             auth: {
//                 user: "info@supersenses.tn",
//                 pass: "Super2217senses"
//             }

//         })

//     const mail = getEmailData(to, form, type)

//     smtpTransport.sendMail(mail, function (error, response) {
        
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("email sent successfully")
//         }

//         smtpTransport.close();
//     })
// }