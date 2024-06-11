const express = require('express')
const isValidData = require('./middleware')
let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let database = []
app.get("/addproduct", (req, res) => {

    // res.send("success")
    res.sendFile(__dirname+"/post.html")
})

app.get("/", (req, res) => {
    let { category, sort, search } = req.query
    let temp = database

    if (search) {

        temp = temp.filter((ele) => ele.title == search)
    }
    if (category) {
        temp = database.filter((ele) => ele.category == category)
    }
    if (sort) {

        if (sort == "lth") {
            temp.sort((a, b) => a.price - b.price)
        }
        else {
            temp.sort((a, b) => b.price - a.price)
        }
    }
    res.send(temp)

})

app.get("/:id", (req, res) => {
    let { id } = req.params
    res.send(database[id])
})


app.post("/", isValidData, (req, res) => {
    database.push(req.body)

    res.send(database)
});

app.delete("/:id", (req, res) => {
    let { id } = req.params;
    database.splice(id, 1)
    res.send(database)
});
app.patch("/:id", (req, res) => {
    let { id } = req.params;
    database[id] = { ...database[id], ...req.body }
    res.send(database)
})


// page render

console.log(__dirname+"/post.html");





app.listen(8090, () => {

    console.log("listening on http://localhost:8090");
});


// [
//     {
//       "title": "shirt",
//       "category": "men",
//       "price": 674
//     },
//     {
//       "title": "dell",
//       "category": "laptop",
//       "price": 674546
//     },
//     {
//       "title": "oneplus",
//       "category": "mobile",
//       "price": 5674
//     }
//   ]