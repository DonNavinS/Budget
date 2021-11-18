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
app.post("/total", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const sql = "INSERT INTO total (name, description) VALUES (?,?);";
  db.query(sql, [name, description], (err, result) => {
    res.send("TABLE UPDATED 2");
    console.log(err);
  });
});

app.post("/tried", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const sql = "INSERT INTO tried (name, description) VALUES (?,?);";
  db.query(sql, [name, description], (err, result) => {
    res.send("TRIED TABLE UPDATED");
    console.log(err);
  });
});

app.get("/retrieve/total", (req, res) => {
  db.query("SELECT * FROM total;", (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.get("/retrieve/tried", (req, res) => {
  db.query("SELECT * FROM tried", (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
