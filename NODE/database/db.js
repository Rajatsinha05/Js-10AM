const mongoose = require('mongoose');
const connectDb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/student")
    console.log("Connected to MongoDB");
}

module.exports = connectDb;