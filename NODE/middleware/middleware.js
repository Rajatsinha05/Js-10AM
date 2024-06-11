
const isValid = (req, res, next) => {

    let { title, category } = req.body
    if (!title || !category) {
        res.send("Please enter a valid data")
    }
    else {
        next()
    }
}

module.exports =isValid