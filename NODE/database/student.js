
const mongoose = require('mongoose')
let studentSchema = new mongoose.Schema({
    name: String,
    number: Number,
    course: String,
    skills: Array

})


const Student = mongoose.model("studentData", studentSchema)

module.exports = Student
