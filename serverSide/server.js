const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://SuperSensesAdmin:SuperSensesAdmin@supersenses.ypjqe.mongodb.net/SuperSensesDB")

app.listen("/", require("../routes/SuperSensesRoute"));

app.listen(3001, function ()
{
    console.log('express server is running on on port 3001')
}
)