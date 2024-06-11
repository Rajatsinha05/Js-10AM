const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String },
    password: String,
    number: Number,
    email: String,
    img:String

})

const User = mongoose.model("User", UserSchema)

module.exports = User