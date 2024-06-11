const User = require("../models/User.model");
const get = (req, res) => {
    res.send("welcome");
}
const getUsers = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createUser = async (req, res) => {

    console.log("createUser", req.body, req.file);

    let { email } = req.body;
    let user = await User.findOne({ email: email })
    if (user) {
        res.send({ msg: "User already exists", user })
    }
    else {

        let data = await User.create(req.body)
        res.send(data)
    }

}


const updateUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body)
    res.send(data)

}
const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id, req.body)

    res.send(data)

}

const loginPage = (req, res) => {
    res.render('login', { title: "testing" })
}
const singupPage = (req, res) => {

    res.render("form")
}

const Login = async (req, res) => {
    let { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (user) {
        if (user.password !== password) {
            res.send("wrong password")
        }
        else {
            res.send("success logged")
        }
    }
    else {
        res.status(404).send("user not found")
    }
}
module.exports = { getUsers, createUser, updateUser, deleteUser, get, singupPage, loginPage, Login }