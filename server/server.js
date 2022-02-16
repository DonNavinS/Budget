const mongoose = require("mongoose")
const {connectionString} = require("./config")

const express = require("express")
const app = express()
const PORT = 3001 || process.env.PORT
app.use(express.json())



mongoose.connect(connectionString, {useNewUrlParser: true})
const db = mongoose.connection
const {Transaction} = require("./models/Transaction")


app.get("/new", (req, res)=> {
    console.log("WORKING");
    Transaction.create({
        name: "new transaction"
    })
})


app.listen(PORT, ()=> {
    db.once("open", ()=> {
        console.log("SERVER STARTED, CONNECTED TO DB");
    })
})