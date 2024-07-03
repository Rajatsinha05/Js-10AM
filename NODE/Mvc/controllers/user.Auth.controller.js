const jwt = require("jsonwebtoken")
const User = require("../models/User.model")

const userSignup = async (req, res) => {

    try {
        let user = await User.create(req.body)
        let tokenData = {
            username: user.username,
            role: user.role,
            id: user.id
        }
        let token = await jwt.sign(tokenData, "private-key")

        res.send({ token, token, status: "created" });
    } catch (error) {
        res.send(error.message)
    }

}


const userLogin = async (req, res) => {
    let { email, password } = req.body

    try {
        let user = await User.findOne({ email })

        if (!user) {
            res.send("Couldn't find user")
        }

        if (user.password !== password) {
            res.send("Password is incorrect")
        }

        let tokenData = {
            username: user.username,
            role: user.role,
            id: user.id
        }
        let token = await jwt.sign(tokenData, "private-key")

        res.send({ token, token, status: "created" });

    } catch (error) {
        res.send(error.message)
    }


}
module.exports = { userSignup ,userLogin }