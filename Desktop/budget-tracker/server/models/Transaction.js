const {model, Schema} = require("mongoose")

const transactionSchema = new Schema({
name: String
})

const Transaction = model("Transaction", transactionSchema)

module.exports = {Transaction}