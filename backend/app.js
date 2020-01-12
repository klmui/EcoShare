const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

// Models
const Action = require('./models/action');

// Connect to mongo DB
mongoose.connect("mongodb+srv://kenny:G5jXaD86Vhdiug9j@cluster0-rc9rf.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("Connected to DB!");
})
.catch(() => {
  console.log("Connection failed");
});

// Middleware for all paths for parsing JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // Parsing URL data

// Middleware to prevent cross origin resource errors or sharing data between servers
// Connects server and Angular app
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // key, value (the domain that is sending the request)
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Incoming request may have these extra headers
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

module.exports = app;
