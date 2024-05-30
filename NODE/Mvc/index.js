const express = require('express');
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const app = express()
app.use(express.json());
require("dotenv").config()
let port=process.env.PORT || 8080

app.use("/user",userRoute)

app.listen(port, () => {
    console.log("listening on port 8090");
    dbConnect()
})