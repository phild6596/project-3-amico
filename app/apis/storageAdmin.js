const firebaseAdmin = require('./firebaseAdmin.js');

const gcloud = require('google-cloud');
const gcs = gcloud.storage({
  projectId: 'project-amico',
  keyFilename: './config/serviceAccount.json'
});




module.exports = gcs;
