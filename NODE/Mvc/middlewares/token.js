const jwt = require("jsonwebtoken");

const isVerified = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1]
        if (!token) {
            res.send("Invalid authorization token")
        }
        let decode = await jwt.verify(token, "private-key")
        console.log(decode);
        if (decode) {
            next()
        }
        else {
            res.send("Invalid authorization token")
        }
    } catch (error) {
        res.send(({ error: error.message, token: "token not verified" }))
    }
}


module.exports = { isVerified }