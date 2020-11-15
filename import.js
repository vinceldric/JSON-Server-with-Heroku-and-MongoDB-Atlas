const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require(`./seeds/places.js`);

// Define model
const Place = require(`./models/place.js`);

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(err){
  console.log(`Connection Error: ${err.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Place.insertMany(dbSeed, function(err, place) {
  console.log('Data import completed.')
  mongoose.connection.close();
});