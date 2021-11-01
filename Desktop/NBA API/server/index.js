require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LaptopWaterParis1027$",
  database: "nba-api-database",
});

app.get("/", (req, res) => {
  const sqlInsert =
    'INSERT INTO players (player_name, points, rebounds, assists, steals, blocks) VALUES ("Example name", "1.1", "2.2", "3.3", "4.4", "5.5");';
  db.query(sqlInsert, (err, result) => {
    res.send("SQL CONNECTION TEST");
  });
});

app.listen(3001, () => {
  console.log(`Server running on PORT 3001`);
});
