
const mongoose = require('mongoose')
require("dotenv").config()
const dbConnect = async () => {
    let url = process.env.DB_URL
    await mongoose.connect(url)
    console.log("Connected to MongoDB");
}
module.exports = dbConnect