const mongoose = require('mongoose');

const SuperSensesSchema = {
    NomPrenomCandidat: string,
    emailContact,
    messageContact
}

const SuperSenses = mongoose.model('SuperSensesSchema');

module.exports = SuperSenses;