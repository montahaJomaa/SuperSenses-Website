
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


app.post("/ContactezNous", (req, res) => {

    const nomPrenomContact = req.body.nomPrenomContact;
    const emailContact = req.body.emailContact;
    const messageContact = req.body.messageContact;
    console.log(nomPrenomContact)
    console.log(messageContact)

    const NewContact = new SuperSenses({
        nomPrenomContact,
        emailContact,
        messageContact
    });

    NewContact.save();
    res.status(200).send('success');
  
    console.log(NewContact);
});


app.post('/EspaceCarriere', (req, res) => {

    const nomPrenomCandidat = req.body.nomPrenomCandidat;
    const emailCandidat = req.body.emailCandidat;
    const numTelephoneCandidat = req.body.numTelephoneCandidat;
    const CVCandidat = req.body.cvcandidat;
    const LettreMotivationCandidat = req.body.lettreMotivationCandidat;
    
    console.log(numTelephoneCandidat)
    console.log(nomPrenomCandidat)

    const NewCandidat = new SuperSenses({
        nomPrenomCandidat,
        emailCandidat,
        numTelephoneCandidat,
        CVCandidat,
        LettreMotivationCandidat
    });

    NewCandidat.save();
    res.status(200).send('success');
  
    console.log(NewCandidat);
});


app.listen(3001, function ()
{
    console.log('express server is running on port 3001')
}
)


