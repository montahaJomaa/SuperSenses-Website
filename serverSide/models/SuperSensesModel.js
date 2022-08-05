const mongoose = require('mongoose');

const SuperSensesSchema = {
    nomPrenomContact:String,
    emailContact:String,
    messageContact:String 
}

const SuperSenses = mongoose.model('SuperSenses',SuperSensesSchema);

module.exports = SuperSenses;

