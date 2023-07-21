const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
const port = 5000
require('dotenv').config()

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
//const DATABASE_URL = "mongodb://localhost/subscribers";
const DATABASE_URL="mongodb+srv://vikas:vikassingh@cluster0.gx4xuwg.mongodb.net/bus_booking";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
