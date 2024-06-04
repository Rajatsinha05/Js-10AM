
const isValid = (req, res, next) => {
    let { username, email, password, number } = req.body
    console.log(req.body);
    if (!username || !email || !password || !number) {
        res.status(400).send("enter valid data")
    }
    else {
        next()
    }
}


module.exports = isValid