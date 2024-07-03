const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    category: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
})


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product