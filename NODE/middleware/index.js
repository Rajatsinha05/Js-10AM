
const express = require('express')
const isValid = require('./middleware')


const app = express()
let database = []

app.use(express.json())
app.get("/", (req, res) => {
    res.send(database)
})

app.post("/", isValid,(req, res) => {
    database.push(req.body)
    res.send(database)
})




app.listen(8090, () => {

    console.log("listening on http://localhost:8090");
})
