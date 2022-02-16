const mongoose = require("mongoose")
const {connectionString} = require("./config")

const express = require("express")
const app = express()
const PORT = 3001 || process.env.PORT
const cors = require("cors")
app.use(express.json())
app.use(cors())



mongoose.connect(connectionString, {useNewUrlParser: true})
const db = mongoose.connection
const {Transaction} = require("./models/Transaction")


app.post("/new", (req, res)=> {
    const newName = req.body.name
    console.log("WORKING");
    Transaction.create({
        name: newName
    })
})


app.listen(PORT, ()=> {
    db.once("open", ()=> {
        console.log("SERVER STARTED, CONNECTED TO DB");
    })
})