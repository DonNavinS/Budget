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


app.get("/retrieve", async (req, res)=> {
    const transactions =await Transaction.find()
    console.log(transactions);
    res.send(transactions);
    
    console.log("TRANSACTIONS RECEIVED");
})

app.post("/new", (req, res)=> {
    const newName = req.body.name
    const newAmount = req.body.amount
    console.log("NEW TRANSACTION CREATED");
    Transaction.create({
        name: newName,
        amount: newAmount
    })
    res.send("NEW TRANSACTION RECEIVED")
})


app.listen(PORT, ()=> {
    db.once("open", ()=> {
        console.log("SERVER STARTED, CONNECTED TO DB");
    })
})