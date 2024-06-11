
const isValid = (req, res, next) => {

    console.log("createUser", req.body, req.file);

    let { username, email, password, number } = req.body


    if (!username || !email || !password || !number) {
        res.status(400).send("enter valid data")
    }
    else {
        next()
    }
}


module.exports = isValid