const admin = require('firebase-admin');

var serviceAccount = require('./vjobs-cb149-cca5be375df5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

module.exports = db;