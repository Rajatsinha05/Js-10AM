const User = require("../models/User.model");
const get = (req, res) => {
    res.send("welcome");
}
const getUsers = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createUser = async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
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
    res.render('login',{title: "testing"})
}
const singupPage = (req, res) => {

    res.render("signup")
}
module.exports = { getUsers, createUser, updateUser, deleteUser, get, singupPage, loginPage }