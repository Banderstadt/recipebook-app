const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const recipebook = require('./controllers/recipebook');

// Connect mongoose to our database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

// Initialize our app variable
const app = express();

// Declaring Port
const port = 3000;

// Middleware for CORS
app.use(cors());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routing all HTTP requests to /recipebook to recipebook controller
app.use('/recipebook', recipebook);

// Index route
app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});

// Listen to port 3000
app.listen(port, () => {
    console.log('Starting the server at port '+port);
});



