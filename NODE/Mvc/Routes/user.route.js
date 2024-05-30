
const { Router } = require('express')
const get = require('../controllers/user.controller')

let userRoute = Router()

userRoute.get('/', get)



module.exports = userRoute