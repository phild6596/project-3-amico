const firebaseAdmin = require('./firebaseAdmin.js');

const gcloud = require('google-cloud');
const gcs = gcloud.storage({
  projectId: 'project-amico',
  keyFilename: PROCESS.ENV.SERVICEACCOUNT || '../config/serviceAccount.json'
});




module.exports = gcs;
