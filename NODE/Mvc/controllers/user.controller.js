const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const MailService = require("../service/mailService");
const { response } = require("express");

const get = (req, res) => {
    res.send("welcome");
}
const getUsers = async (req, res) => {
    let data = await User.find()
    res.send(data)
}
const createUser = async (req, res) => {
    let { email, password } = req.body;
    let hashPassword = await bcrypt.hash(password, 10)
    req.body.password = hashPassword



    let user = await User.findOne({ email: email })
    if (user) {
        res.send({ msg: "User already exists", user })
    }
    else {
        if (req.file) {
            req.body.img = req.file.path
        }
        let data = await User.create(req.body)
        res.cookie({ "uId": data.id, "role": data.role }).send(data)
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
    res.render("signup")
}

const Login = async (req, res) => {
    let { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (user) {
        // if (user.password !== password) {
        //     res.send("wrong password")
        // }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.send("wrong password")
        }
        else {
            res.cookie("uId", user.id)
            res.cookie("role", user.role)
            res.send("success logged")

        }
    }
    else {
        res.status(404).send("user not found")
    }
}





// mail 
const sendMail = (req, res) => {
    let { email } = req.body
    let otp = Math.round(Math.random() * 10000)
    MailService(email, otp)

    res.send("sending mail...")
}


module.exports = { getUsers, createUser, updateUser, deleteUser, get, singupPage, loginPage, Login, sendMail }