// const db = require("../database");
const uniqid = require("uniqid");

const musicSeeds = require("../seeders/seeds/music.seed");
// musicSeeds.forEach(async musicSeed=>{
//     await db.query("INSERT INTO ")
// })
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("MySql Connected...");
});
db.query("TRUNCATE TABLE music_table");
var i = 0;

const insertSeeds = async (j) => {
  const music_id = uniqid();
  await db.query(
    "INSERT INTO music_table (music_id,title,artist,thumbnail,link,year,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)",
    [
      music_id,
      musicSeeds[j].title,
      musicSeeds[j].artist,
      musicSeeds[j].thumbnail,
      musicSeeds[j].link,
      musicSeeds[j].year,
      new Date(),
      new Date()
    ],
    async (err, result) => {
      if (err) {
        return console.log(err);

      }
      if (musicSeeds.length - 1 > j) {
        return await insertSeeds(j + 1);
      } else {
        console.log("Music seeded successfully");
      }
    }
  );
};



insertSeeds(i);
