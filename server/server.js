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
const { response } = require("express")


app.get("/retrieve", async (req, res)=> {
    const transactions = await Transaction.find()
    res.send(transactions);
    
})

app.post("/new", (req, res)=> {
    const newName = req.body.name
    const newAmount = req.body.amount
    console.log("NEW TRANSACTION CREATED");
    Transaction.create({
        name: newName,
        amount: newAmount
    }).then((response)=> {
console.log(response._id);
res.send(response._id)
    })

    
})

app.delete("/delete/:id", async (req, res)=> {
const id = req.params.id
        // const deleted = await Transaction.findByIdAndDelete(id)
        console.log(id)
        // console.log(deleted)
})

app.listen(PORT, ()=> {
    db.once("open", ()=> {
        console.log("SERVER STARTED, CONNECTED TO DB");
    })
})