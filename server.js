// JavaScript source code
import express from "express"
import cors from "cors"
//import dotenv from "dotenv"
import path from "path"

//dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(process.cwd(),"build")))


app.get("/", (req, res) => {
    res.sendFile(path.join(dirname,"build","index.html"))
})

app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

console.log()

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
