const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../config/serviceAccount.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://project-amico.firebaseio.com',
  storageBucket: "project-amico.appspot.com/",
});


module.exports = firebaseAdmin;