const express = require('express');
const router = express.Router();
const SuperSenses = require('../models/SuperSensesModel');

router.post('/ContactezNous', (req, res) => {
    console.log(req.body);
    const NomPrenomContact = req.body.NomPrenomCandidat;
    const emailContact = req.body.EmailContact;
    const messageContact = req.body.MessageContact;
   
    const NewContact = new SuperSenses({
        NomPrenomContact,
        emailContact,
        messageContact
    });

    NewContact.save();
});

router.post('/EspaceCarriere', (req, res) => {
    console.log(req.body);
    const NomPrenomContact = req.body.NomPrenomCandidat;
    const emailContact = req.body.EmailContact;
    const messageContact = req.body.MessageContact;
   
    const NewContact = new SuperSenses({
        NomPrenomContact,
        emailContact,
        messageContact
    });

    NewContact.save();
});

module.exports = router;