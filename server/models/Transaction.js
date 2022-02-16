const {model, Schema} = require("mongoose")

const transactionSchema = new Schema({
name: {
    type: String,
    required:true
},
amount: {
    type: String,
    required: true
}
})

const Transaction = model("Transaction", transactionSchema)

module.exports = {Transaction}