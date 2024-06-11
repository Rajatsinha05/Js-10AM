
const { Router } = require('express')
const { get, getUsers, createUser, deleteUser, updateUser, singupPage, loginPage, Login } = require("../controllers/user.controller")
const isValid = require('../middlewares/dataValid')
const multer = require('multer')

// multer
const storage =  multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
}).single("profile")



let userRoute = Router()
userRoute.get('/test', get)
userRoute.get('/', getUsers)
userRoute.post('/', isValid, upload, createUser)
userRoute.delete('/:id', deleteUser)
userRoute.patch("/:id", updateUser)
userRoute.get("/signup", singupPage)
userRoute.get('/login', loginPage)
userRoute.post('/login', Login)
module.exports = userRoute