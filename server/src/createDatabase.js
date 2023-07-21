const mongoose = require('mongoose')
const busDataModel = require('./models/busData')
const data = require('./data')
require('dotenv').config()

// Connect to DATABASE
//const DATABASE_URL = "mongodb://localhost/subscribers";

const DATABASE_URL="mongodb+srv://vikas:vikassingh@cluster0.gx4xuwg.mongodb.net/bus_booking";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await busDataModel.deleteMany({})
    // console.log(connection)
    await busDataModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()