const mongoose = require("mongoose");
const { connectionString } = require("./config");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
const { Transaction } = require("./models/Transaction");
const { response } = require("express");

app.get("/retrieve", async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
});

app.post("/new", (req, res) => {
  const newName = req.body.name;
  const newAmount = req.body.amount;
  const newIncome = req.body.income;

  console.log("NEW TRANSACTION CREATED");
  Transaction.create({
    name: newName,
    amount: newAmount,
    income: newIncome,
  }).then((response) => {
    res.send(response._id);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await Transaction.findByIdAndDelete(id);
  console.log(deleted);
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newName = req.body.name;
    const newAmount = req.body.amount;
    const updated = await Transaction.findByIdAndUpdate(id, {
      name: newName,
      amount: newAmount,
    });
    console.log(updated);
    console.log("updated");
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  db.once("open", () => {
    console.log("SERVER STARTED, CONNECTED TO DB");
  });
});
