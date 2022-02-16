const {model, Schema} = require("mongoose")

const transactionSchema = new Schema({
name: String,
amount: Number
})

const Transaction = model("Transaction", transactionSchema)

module.exports = {Transaction}