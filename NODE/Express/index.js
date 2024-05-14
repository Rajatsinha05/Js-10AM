
const express = require('express')

const app = express()
app.use(express.json())
let arr = []
app.get("/", (req, res) => {


    res.send(arr)
})

// findById

app.get("/:id", (req, res) => {
    let { id } = req.params
    res.send(arr[id])

})


app.post("/", (req, res) => {
    arr.push(req.body)
    res.send(req.body)
})
app.put("/:id", (req, res) => {
    let { id } = req.params
    arr[id] = req.body
    res.send(arr[id])
})
app.patch("/:id", (req, res) => {
    let { id } = req.params
    arr[id] = { ...arr[id], ...req.body }
    res.send(arr[id])
})
app.delete("/:id", (req, res) => {
    let { id } = req.params
    arr.splice(id, 1)
    res.send("data: ")
})
app.listen(8090, () => {
    console.log("Connect to server listening on port 8090");
})

