
const { Router } = require('express')
const { get, getUsers, createUser, deleteUser, updateUser, singupPage, loginPage } = require("../controllers/user.controller")
const isValid = require('../middlewares/dataValid')
let userRoute = Router()
userRoute.get('/test', get)
userRoute.get('/', getUsers)
userRoute.post('/', isValid, createUser)
userRoute.delete('/:id', deleteUser)
userRoute.patch("/:id", updateUser)
userRoute.get("/signup", singupPage)
userRoute.get('/login', loginPage)
module.exports = userRoute