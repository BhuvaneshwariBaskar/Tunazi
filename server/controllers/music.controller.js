const db = require("../database");

exports.fetchMusic = async (req, res) => {
  await db.query("SELECT * FROM music_table", (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(response);
    }
  });
};
