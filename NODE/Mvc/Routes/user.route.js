
const { Router } = require('express')
const { get, getUsers, createUser, deleteUser, updateUser, singupPage, loginPage, Login, sendMail, passwordReset, passwordPage, sendMailPage, verifyPage, sendOtpByEmail, verifyOtp } = require("../controllers/user.controller")
const isValid = require('../middlewares/dataValid')
const multer = require('multer')
const upload = require('../middlewares/uploadImage')
const { isLoggedIn } = require('../middlewares/user')
const passport = require('passport')
const { isLogged } = require('../middlewares/validateUser')
const { userSignup, userLogin } = require('../controllers/user.Auth.controller')
const { isVerified } = require('../middlewares/token')


// multer
// const storage =  multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {

//         cb(null, Date.now() + file.originalname)
//     }
// })

// const upload = multer({
//     storage: storage,
// }).single("profile")



let userRoute = Router()
userRoute.get('/test', get)
userRoute.get('/', isLoggedIn, getUsers)
userRoute.post('/', upload.single("profile"), createUser)
userRoute.delete('/:id', deleteUser)
userRoute.patch("/:id", updateUser)
userRoute.get("/signup", singupPage)
userRoute.get('/login', loginPage)
// userRoute.post('/login', Login)
userRoute.post('/login', passport.authenticate("local"), (req, res) => {
    res.send("logged in")
})
userRoute.get('/details', isLogged, (req, res) => {
    res.send({ message: "User details", user: req.user })
})

// mail
userRoute.post('/mail', sendMail)


// reset password
userRoute.post('/password-reset', isLogged, passwordReset)
userRoute.get("/password-reset", isLogged, passwordPage)


// password reset by email otp
userRoute.get("/otp", sendMailPage)
userRoute.get("/verify", verifyPage)
userRoute.post("/verify", verifyOtp)
userRoute.post("/otp", sendOtpByEmail)


// jsonwebToken
userRoute.post("/signup/token", userSignup)
userRoute.post("/login/token", userLogin)
userRoute.get("/isverify", isVerified, (req, res) => {
    res.send("Welcome to the our website")
})





module.exports = userRoute