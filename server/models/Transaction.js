const { model, Schema } = require("mongoose");

const transactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  income: {
    type: Boolean,
    required: true,
  },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = { Transaction };
