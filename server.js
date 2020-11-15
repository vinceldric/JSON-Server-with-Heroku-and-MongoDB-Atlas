//Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

//import model
const Place = require(`./models/place.js`);

//Create express app
const app = express();

app.set('view engine', 'ejs');

//app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

//Connect to DB
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

//index
app.get('/', function(req, res) {
  res.send('<h1>Welcome User !</h1><p>Enter this endpoint \'<strong> /api/v0/places </strong>\' at the end of the URL above to see an array of objects. <strong>or;</strong></p><p>Enter this endpoint \'<strong> /api/v0/places/:id </strong>\' at the end of the URL to see the object of the specified ID.</p><p><strong>:id - any number from 1 to 15</strong></p>');
})

//JSON endpoint of array of objects
app.get('/api/v0/places', function(req, res) {
  Place.find({}, function(err, data) {
    if(err) {
      res.send('<p>Could not retrieve places.</p><p>Please import \'places\' to database.</p>');
    }
    else {
      res.json(data);
    }
  });
})

//JSON endpoint of specified ID individually
app.get('/api/v0/places/:id', function(req, res) {
  let placeId = req.params.id;
  Place.findOne({id: placeId}, function(err, data) {
    if(err || data === null) {
      res.send('ID you\'ve entered does not exist!');
      console.log(err);
    }else {
      res.json(data);
    }
  });
})

//Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

//Set port preferrence with default
const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});