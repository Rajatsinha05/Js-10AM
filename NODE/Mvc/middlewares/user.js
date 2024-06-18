const User = require("../models/User.model")

const isLoggedIn = (req, res, next) => {
    if (req.cookies.uId) {
        next()
    }
    else {
        res.redirect("/user/login")
    }
}

const isAdmin = async (req, res, next) => {
    if (req.cookies.uId) {
        let data = await User.findById(req.cookies.uId)

        if (data.role === "admin") {
            next()
        }
        else {
            res.send("you are not allowed to access this")
        }
    }
    else {
        res.redirect("/user/login")
    }


}

module.exports = { isAdmin, isLoggedIn }
