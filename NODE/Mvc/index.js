const express = require('express');
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config()
let port = process.env.PORT || 8080

//  ejs setup
app.set("view engine", "ejs")
app.set("views", __dirname + "/view")






app.use("/user", userRoute)
app.listen(port, () => {
    console.log("listening on port 8090");
    dbConnect()
})