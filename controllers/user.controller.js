const { json } = require("express");
const path = require("path");
const db = require("../database");

// Profile Pic
exports.profilePicPost = async (req, res) => {
  try {
    const p =
      process.env.SERVER_URL +
      "/users/" +
      req.body.userId +
      "/" +
      req.body.userId +
      req.file.originalname.slice(
        req.file.originalname.lastIndexOf("."),
        req.file.originalname.length
      );

    db.query(
      "UPDATE user_table SET profilepic = ? WHERE user_id = ?",
      [p, req.body.userId],
      (err, response) => {
        if (err) {
          console.log(err);
          return res.json(err);
        }
        db.query(
          "SELECT * FROM user_table WHERE user_id = ?",
          [req.body.userId],
          (err, response1) => {
            if (err) {
              console.log(err);
              return res.json(err);
            }

            res.json({
              ...response1[0],
              token: req.headers["authorization"].split(" ")[1],
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// History

exports.historyPost = async (req, res) => {
  const { history } = req.body;
  const { user_id } = req.params;

  await db.query(
    "UPDATE user_table SET history = ? WHERE user_id = ?",
    [JSON.stringify(history), user_id],
    async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(409).json({ err });
      }
      return res.json("OKAY");
    }
  );
};

exports.historyGet = async (req, res) => {
  const { user_id } = req.params;

  await db.query(
    "select history from user_table where user_id= ? ",
    [user_id],
    async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(409).json({ err });
      }
      const history = JSON.parse(result.length && result[0].history);
      await db.query(
        "select * from music_table where music_id IN (?)",
        [history],
        async (err, result) => {
          if (err) {
            console.log(err);
            return res.status(409).json({ err });
          }
          return res.json(result);
        }
      );
    }
  );
};

// Favorites

exports.updateFavPost = async (req, res) => {
  const { favorites } = req.body;
  const { user_id } = req.params;

  await db.query(
    "UPDATE user_table SET favorites = ? WHERE user_id = ?",
    [JSON.stringify(favorites), user_id],
    async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(409).json({ err });
      }
      return res.json("OKAY");
    }
  );
};

exports.getFav = async (req, res) => {
  const { user_id } = req.params;

  await db.query(
    "select favorites from user_table where user_id= ? ",
    [user_id],
    async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(409).json({ err });
      }
      const favorites = JSON.parse(result.length && result[0].favorites);
      await db.query(
        "select * from music_table where music_id IN (?)",
        [favorites],
        async (err, result) => {
          if (err) {
            console.log(err);
            return res.status(409).json({ err });
          }
          return res.json(result);
        }
      );
    }
  );
};
