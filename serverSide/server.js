
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

    const NomPrenomContact = req.body.NomPrenomCandidat;
    const emailContact = req.body.EmailContact;
    const messageContact = req.body.MessageContact;
   
    const NewContact = new SuperSenses({
        NomPrenomContact,
        emailContact,
        messageContact
    });

    console.log(NewContact);

    NewContact.save();
    res.status(200).send('success');

});

app.listen(3001, function ()
{
    console.log('express server is running on port 3001')
}
)

