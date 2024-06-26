const express = require('express');
const dbConnect = require('./config/db');
const userRoute = require('./Routes/user.route');
const cookie = require('cookie-parser');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config()

app.use(cookie())
let port = process.env.PORT || 8080
const path = require("path");
const productRoute = require('./Routes/Product.route');
const passport = require('passport');
const intializer = require('./middlewares/Auth');

const session = require("express-session");
const googleAuth = require('./middlewares/GoogleAuth');

//  ejs setup
app.set("view engine", "ejs")
app.set("views", __dirname + "/view")
app.use(express.static("public"))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use(session({ secret: "secret-key" }))

app.use(passport.initialize())
app.use(passport.session())
intializer(passport)
googleAuth(passport)
app.get("/", (req, res) => {
    res.render("index")
})







// google routes
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.

        console.log();
        res.send("logged in by google")
    });



app.use("/user", userRoute)
app.use("/product", productRoute)
app.listen(port, () => {
    console.log("listening on port 8090");
    dbConnect()
})