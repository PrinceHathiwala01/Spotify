const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to database");
    } catch (err) {
        console.log("could not connect to database");
    }
}
module.exports = connectDB;