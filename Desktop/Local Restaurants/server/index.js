const express = require("express");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LaptopWaterParis1027$",
  database: "food_finder",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const sql =
    'INSERT INTO all_restaurants (name, description) VALUES ("Test1", "Test2");';
  db.query(sql, (err, result) => {
    res.send("TABLE UPDATED");
  });
});
app.post("/test", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const sql = "INSERT INTO all_restaurants (name, description) VALUES (?,?);";
  db.query(sql, [name, description], (err, result) => {
    res.send("TABLE UPDATED 2");
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
