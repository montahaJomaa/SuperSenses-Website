const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const SuperSenses = require("./models/SuperSensesModel");



app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://SuperSensesAdmin:SuperSensesAdmin@supersenses.ypjqe.mongodb.net/SuperSensesDB")
app.get('/', (req, res) => {
    res.status(200).send('Server is Running!');
});

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { response } = require('express');
const { upload } = require('upload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/ContactezNous", (req, res) => {

    const nomPrenomContact = req.body.nomPrenomContact;
    const emailContact = req.body.emailContact;
    const messageContact = req.body.messageContact;

    console.log(nomPrenomContact)
    console.log(emailContact)
    console.log(messageContact)

    const NewContact = new SuperSenses({
        nomPrenomContact,
        emailContact,
        messageContact
    });

    NewContact.save();
    res.status(200).send('success');

    console.log(NewContact);



    // const multer = require("multer");

    // const fileStorageEngine = multer.diskStorageEngine({
    //     destination: (req, file, cb) => {
    //         cb(null, './UploadedFiles')
    //     },
    //     filename: (req, file, cb) => {
    //         cb(null, Date.now() + '--' + file.originalname)
    //     }
    // });


    // const upload = multer({ storage: fileStorageEngine });

    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, "EspaceCarriereForm"));
    // });

    // app.post("/single", upload.single("CVCandidat"),
    //     (req, res) => {
    //         console.log(req.files);
    //         res.send("Single files has been uploaded successfully");
    //     })



    let smtpTransport = nodemailer.createTransport({

        host: "ssl0.ovh.net",

        secure: false,
        auth: {
            user: "info@supersenses.tn",
            pass: "Super2217senses"
        }
    });


    let mailOptions = {

        from: "info@supersenses.tn",
        to: "info@supersenses.tn",
        subject: "Demande de contact",
        html: `<h3>Nom et Prenom:</h3>${nomPrenomContact}<h3>Adresse email:</h3>${emailContact}<h3>Message:</h3>${messageContact}`

    };

    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            return console.log(err);

        } else {
            console.log('Message has been sent: ' + info.response);
        }

    })
});

app.post("/EspaceCarriereForm", (req, res) => {
    const radioValue = req.body.radioValue;
    const nomPrenomCandidat = req.body.nomPrenomCandidat;
    const emailCandidat = req.body.emailCandidat;
    const numTelephoneCandidat = req.body.numTelephoneCandidat;
    const selectSpecialite = req.body.selectSpecialite;
    const CVCandidat = req.body.CVCandidat;
    const LettreMotivationCandidat = req.body.LettreMotivationCandidat;

    console.log(radioValue)
    console.log(nomPrenomCandidat)
    console.log(emailCandidat)
    console.log(numTelephoneCandidat)
    console.log(selectSpecialite)
    console.log(CVCandidat)
    console.log(LettreMotivationCandidat)



    let smtpTransport = nodemailer.createTransport({

        host: "ssl0.ovh.net",

        secure: false,
        auth: {
            user: "info@supersenses.tn",
            pass: "Super2217senses"
        }
    });


    let mailOptions = {

        from: "info@supersenses.tn",
        to: "info@supersenses.tn",
        subject: `Condidature spontannée pour un ${radioValue} `,
        html: `<h3>Nom et Prenom:</h3>${nomPrenomCandidat}<h3>Adresse email:</h3>${emailCandidat}<h3>Numero du telephone:</h3>${numTelephoneCandidat}<h3>Specialité</h3>${selectSpecialite}`,
        attachments: [
            {
                filename: `${CVCandidat}`,
                contentType: 'application/pdf'
            },
            {
                filename: `${LettreMotivationCandidat}`,
                contentType: 'application/pdf'
            }
        ]
    };

    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            return console.log(err);

        } else {
            console.log('Message has been sent: ' + info.response);
        }

    })
});





app.listen(3001, function () {
    console.log('express server is running on port 3001')
}
)
