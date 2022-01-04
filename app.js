const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

// Create environment variables
require('dotenv').config();
const port = process.env.PORT || 4000;
const routes = require('./server/routes/bike');


// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

//Set public folder
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

//Static Files
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/image', express.static(__dirname + 'public/image'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set layout
app.set('layout', './layouts/main');


// // Router
app.use('/', routes);


// Start the server
app.listen(port, console.log(`Server listening on ${port}`));