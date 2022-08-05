const mongoose = require('mongoose');

const SuperSensesSchema = {
    NomPrenomCandidat: String,
    emailContact:String,
    messageContact:String 
}

const SuperSenses = mongoose.model('SuperSenses',SuperSensesSchema);

module.exports = SuperSenses;