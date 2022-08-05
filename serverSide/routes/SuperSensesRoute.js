const express = require('express');
const router = express.Router();
const SuperSenses = require('../models/SuperSensesModel');

router.post('/ContactezNous', (req, res) => {
    console.log(req.body);
    const nomPrenomContact = req.body.nomPrenomCandidat;
    const emailContact = req.body.emailContact;
    const messageContact = req.body.messageContact;
   
    const NewContact = new SuperSenses({
        nomPrenomContact,
        emailContact,
        messageContact
    });

    NewContact.save();
});

router.post('/EspaceCarriere', (req, res) => {
    console.log(req.body);
    
    const nomPrenomCandidat = req.body.nomPrenomCandidat;
    const emailCandidat = req.body.emailCandidat;
    const numTelephoneCandidat = req.body.numTelephoneCandidat;
    const CVCandidat = req.body.CVCandidat;
    const LettreMotivationCandidat = req.body.LettreMotivationCandidat;
    
    const NewCandidat = new SuperSenses({
        nomPrenomCandidat,
        emailCandidat,
        numTelephoneCandidat,
        CVCandidat,
        LettreMotivationCandidat
    });

    NewCandidat.save();
});

module.exports = router;