const express = require("express");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LaptopWaterParis1027$",
  database: "food_finder",
});

app.get("/", (req, res) => {
  const sql =
    'INSERT INTO all_restaurants (name, description) VALUES ("REST6", "DESC6");';
  db.query(sql, (err, result) => {
    res.send("TABLE UPDATED");
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
