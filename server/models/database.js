const mongoose = require('mongoose');
require('dotenv').config();

//Set up default mongoose connection
mongoose.connect(process.env.MONGODB_URI, {});

//Get the default connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Connected')
});

// Models
require('./Bike');