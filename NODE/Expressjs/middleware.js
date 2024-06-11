
const isValidData = (req, res, next) => {

console.log("request",req.body);

    let { title, category, price } = req.body

    if (!title || !category || !price) {
        res.status(400).send({ message: "Invalid data" })
    }
    else {
        next()
    }

}


module.exports =isValidData

