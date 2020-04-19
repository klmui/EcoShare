const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllActions
} = require('./APIs/actions')


// Will be changed to getOneAction
app.get('/', getAllActions);
exports.api = functions.https.onRequest(app);
