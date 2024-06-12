const express = require('express');
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config()
let port = process.env.PORT || 8080
const path =require("path");
const productRoute = require('./Routes/Product.route');
//  ejs setup
app.set("view engine", "ejs")
app.set("views", __dirname + "/view")
app.use(express.static("public"))
app.use("/uploads", express.static(path.join(__dirname,"uploads")))



app.get("/", (req, res) => {
    res.render("index")
})

app.use("/user", userRoute)
app.use("/product",productRoute)
app.listen(port, () => {
    console.log("listening on port 8090");
    dbConnect()
})