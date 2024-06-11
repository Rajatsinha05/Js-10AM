const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        
        cb(null, file.originalname );
    }
});


const upload = multer({
    storage: storage
}).single("img");

app.get("/", (req, res) => {
    res.send("testing");
});

app.post("/", upload, (req, res) => {
    try {
        console.log("reqbody: " + req.body);
        console.log("file: ", req.file); 
        res.send("uploading...");
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(8090, () => {
    console.log("listening on port 8090");
});
