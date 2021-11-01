require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const axios = require("axios").default;

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

app.get("/search", (req, res) => {
  var options = {
    method: "GET",
    url: "https://nba-player-individual-stats.p.rapidapi.com/players",
    headers: {
      "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
      "x-rapidapi-key": "7bca20d701msh6e19f6d29e75ea8p1fda7bjsnb742d201c4e9",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const playerInfo = `INSERT INTO players (player_name, points, rebounds, assists, steals, blocks) VALUES ("${response.data[0].firstName}", "${response.data[0].careerPoints}", "${response.data[0].careerRebounds}", "${response.data[0].carrerAssists}", "${response.data[0].careerBlocks}", "${response.data[0].careerTurnovers}");`;
      console.log(playerInfo);
      db.query(playerInfo, (err, result) => {
        res.send("Player Information Updated in Database");
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(3001, () => {
  console.log(`Server running on PORT 3001`);
});
