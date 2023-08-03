const admin = require('firebase-admin');
const serviceAccount = require('./atiyah-pk-firebase-adminsdk-xki8a-368f31023f.json');
require('dotenv').config()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://atiyah-pk.appspot.com', 
});

const bucket = admin.storage().bucket();

module.exports = { bucket };

