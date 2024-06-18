const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String },
    password: String,
    number: Number,
    email: String,
    img: String,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }

})

const User = mongoose.model("User", UserSchema)

module.exports = User