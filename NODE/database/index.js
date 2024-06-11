
const express = require('express');
const connectDb = require('./db');
const Student = require('./student');
const app = express()
app.use(express.json());




app.get("/", async (req, res) => {
    let student = await Student.find()
    res.send(student)
});
app.get("/:id", async (req, res) => {
    let { id } = req.params
    let data = await Student.findById(id)
    res.send(data)
})
app.post("/", async (req, res) => {
    let data = await Student.create(req.body);
    res.send(data)
});
app.patch("/:id", async (req, res) => {
    let { id } = req.params
    await Student.findByIdAndUpdate(id, req.body)
    res.send("updated")
});
app.delete("/:id", async (req, res) => {
    let { id } = req.params
    await Student.findByIdAndDelete(id)
    res.send("deleted")
});

app.listen(8090, () => {
    console.log("listening on port 8090");
    connectDb()
})


let data=[
    {
        question:"Are you sure?",
        Option:[],
        correct:"yes"
    }
]

console.log(ele.correct!=data.correct);